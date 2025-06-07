// NotificationsList.js
import React from 'react';

const NotificationsList = ({ notifications }) => {
  console.log('NotificationsList rendered');
  return (
    <ul>
      {notifications.map((n) => (
        <li key={n.id}>{n.message}</li>
      ))}
    </ul>
  );
};

export default NotificationsList;