import React from 'react';
import './ChatHeader.css';

function ChatHeader({ friendName, profilePic }) {
  return (
    <div className="chat-header" role="banner" aria-label={friendName}>
      <img src={profilePic} alt={friendName} className="chat-header-profile-pic" />
      <span className="chat-header-name">{friendName}</span>
    </div>
  );
}

export default ChatHeader;