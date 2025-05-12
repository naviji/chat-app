import React from 'react';
import './MessageItem.css';

function MessageItem({ message, isOwnMessage }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`message-item-wrapper ${isOwnMessage ? 'own-message-wrapper' : 'other-message-wrapper'}`}>
      <div className={`message-item ${isOwnMessage ? 'own-message' : 'other-message'}`}>
        <p className="message-text">{message.text}</p>
        <span className="message-timestamp">{formatDate(message.timestamp)}</span>
      </div>
    </div>
  );
}

export default MessageItem;