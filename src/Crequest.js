import React, { useState } from 'react';
import './Crequest.css';

const initialRequests = [
    { id: 1, name: 'Amit Gupta ', mutualFriends: 5 },
    { id: 2, name: 'Mohit Sharma', mutualFriends: 2 },
    { id: 3, name: 'Sumit Mishra', mutualFriends: 3 },
    { id: 4, name: 'Riya bhardwaj', mutualFriends: 1 },
];

const Crequest = () => {
    const [requests, setRequests] = useState(initialRequests);

    const handleAccept = (id) => {
        setRequests(requests.filter(request => request.id !== id));
        // Add logic to handle accept request (e.g., send request to server)
    };

    const handleReject = (id) => {
        setRequests(requests.filter(request => request.id !== id));
        // Add logic to handle reject request (e.g., send request to server)
    };

    return (
        <div className="requests-container">
            <h2>Connection Requests</h2>
            <ul className="requests-list">
                {requests.map(request => (
                    <li key={request.id} className="request-card">
                        <div className="request-info">
                            <h3>{request.name}</h3>
                            <p>{request.mutualFriends} mutual friends</p>
                        </div>
                        <div className="request-actions">
                            <button onClick={() => handleAccept(request.id)} className="accept-button">Accept</button>
                            <button onClick={() => handleReject(request.id)} className="reject-button">Reject</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Crequest;
