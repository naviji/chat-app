import React, { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';
import './MessageList.css';

function MessageList({ messages, currentUser }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll to bottom whenever messages change

  return (
    <div className="message-list" data-testid="message-list">
      {messages.map(msg => (
        <MessageItem
          key={msg.id}
          message={msg}
          isOwnMessage={msg.senderId === currentUser.id}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;