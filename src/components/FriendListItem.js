import React from 'react';
import './FriendListItem.css';

function FriendListItem({ friend, isSelected, onSelectFriend }) {
  const getLastMessage = () => {
    if (friend.messages && friend.messages.length > 0) {
      const lastMsg = friend.messages[friend.messages.length - 1];
      return lastMsg.text.length > 30 ? lastMsg.text.substring(0, 27) + '...' : lastMsg.text;
    }
    return "No messages yet";
  };

  return (
    <div
      className={`friend-list-item ${isSelected ? 'selected' : ''}`}
      onClick={onSelectFriend}
    >
      <img src={friend.profilePic} alt={friend.name} className="friend-profile-pic" />
      <div className="friend-info">
        <span className="friend-name">{friend.name}</span>
        <span className="friend-last-message">{getLastMessage()}</span>
      </div>
    </div>
  );
}

export default FriendListItem;