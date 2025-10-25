import React, { useEffect, useState } from 'react';
import { fetchPendingUsers, approveUser, rejectUser } from '../../api/apiClient';

const PendingUsersList: React.FC = () => {
    const [pendingUsers, setPendingUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPendingUsers = async () => {
            const users = await fetchPendingUsers();
            setPendingUsers(users);
            setLoading(false);
        };

        loadPendingUsers();
    }, []);

    const handleApprove = async (userId: string) => {
        await approveUser(userId);
        setPendingUsers(pendingUsers.filter(user => user.id !== userId));
    };

    const handleReject = async (userId: string) => {
        await rejectUser(userId);
        setPendingUsers(pendingUsers.filter(user => user.id !== userId));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Pending Users</h2>
            <ul>
                {pendingUsers.map(user => (
                    <li key={user.id}>
                        {user.username}
                        <button onClick={() => handleApprove(user.id)}>Approve</button>
                        <button onClick={() => handleReject(user.id)}>Reject</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PendingUsersList;