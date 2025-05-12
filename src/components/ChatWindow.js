import React from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './ChatWindow.css';

function ChatWindow({ friend, currentUser, messages, onSendMessage }) {
  if (!friend) {
    return <div className="chat-window-empty">Select a chat</div>;
  }

  return (
    <div className="chat-window">
      <ChatHeader friendName={friend.name} profilePic={friend.profilePic} />
      <MessageList messages={messages} currentUser={currentUser} />
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
}

export default ChatWindow;