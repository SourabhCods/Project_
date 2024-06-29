import React from 'react';
import './Message.css';

const messages = [
    {
        id: 1,
        sender: 'Amit Sharma',
        content: 'Hey, I saw we are in the same course! Want to study together?',
        timestamp: '2024-06-26 10:00 AM'
    },
    {
        id: 2,
        sender: 'Sumit Mishra',
        content: 'Hi! I have a question about the sort function. Can you help me?',
        timestamp: '2024-06-25 05:30 PM'
    }
];

const Message = () => {
    return (
        <div className="message-container">
            <h1>Messages</h1>
            <ul className="message-list">
                {messages.map(message => (
                    <li key={message.id} className="message-item">
                        <div className="message-sender">{message.sender}</div>
                        <div className="message-content">{message.content}</div>
                        <div className="message-timestamp">{message.timestamp}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Message;
