import React from 'react';
import './Notification.css';

const Notification = () => {
    const notifications = [
        {
            id: 1,
            message: 'Your profile matches with 2 people. Send requests to these people.',
            timestamp: '2024-06-26 10:00 AM'
        },
        {
            id: 2,
            message: 'Ankit kumar send connection request.',
            timestamp: '2024-06-25 05:30 PM'
        },
        {
            id: 3,
            message: 'Sumit Mishra accepted your request.',
            timestamp: '2024-06-24 03:45 PM'
        },
        {
            id: 4,
            message: 'Your companion is online.',
            timestamp: '2024-06-23 09:00 AM'
        }
    ];

    return (
        <div className="notification-container">
            <h1>Notifications</h1>
            <ul className="notification-list">
                {notifications.map((notification) => (
                    <li key={notification.id} className="notification-item">
                        <p className="notification-message">{notification.message}</p>
                        <p className="notification-timestamp">{notification.timestamp}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notification;

