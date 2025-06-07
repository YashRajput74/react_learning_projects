// UserProfile.js
import React, { memo } from 'react';

const UserProfile = ({ user }) => {
  console.log('UserProfile rendered');
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default memo(UserProfile);