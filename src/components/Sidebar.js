import React from 'react';
import FriendListItem from './FriendListItem';
import './Sidebar.css';

function Sidebar({ friends, currentUser, selectedFriendId, onSelectFriend }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={currentUser.profilePic} alt={currentUser.name} className="sidebar-profile-pic" />
        <h3>{currentUser.name}</h3>
      </div>
      <div className="sidebar-friends-list">
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            friend={friend}
            isSelected={friend.id === selectedFriendId}
            onSelectFriend={() => onSelectFriend(friend.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;