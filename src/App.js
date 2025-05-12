import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import initialMockData from './mockData';

function App() {
  const [currentUser] = useState(initialMockData.currentUser);
  const [friends, setFriends] = useState(initialMockData.friends);
  const [selectedFriendId, setSelectedFriendId] = useState(null);

  // Select the first friend by default
  useEffect(() => {
    if (friends.length > 0 && !selectedFriendId) {
      setSelectedFriendId(friends[0].id);
    }
  }, [friends, selectedFriendId]);

  const handleSelectFriend = (friendId) => {
    setSelectedFriendId(friendId);
  };

  const handleSendMessage = (text) => {
    if (!selectedFriendId || !text.trim()) return;

    const newMessage = {
      id: `msg${Date.now()}`, // Simple unique ID
      senderId: currentUser.id,
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };

    setFriends(prevFriends =>
      prevFriends.map(friend =>
        friend.id === selectedFriendId
          ? { ...friend, messages: [...friend.messages, newMessage] }
          : friend
      )
    );
  };

  const selectedFriend = friends.find(f => f.id === selectedFriendId);

  return (
    <div className="app-container">
      <Sidebar
        friends={friends}
        currentUser={currentUser}
        selectedFriendId={selectedFriendId}
        onSelectFriend={handleSelectFriend}
      />
      {selectedFriend ? (
        <ChatWindow
          friend={selectedFriend}
          currentUser={currentUser}
          messages={selectedFriend.messages}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <div className="chat-window-placeholder">Select a friend to start chatting.</div>
      )}
    </div>
  );
}

export default App;