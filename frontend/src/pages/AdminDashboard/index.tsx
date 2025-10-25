import React, { useEffect, useState } from 'react';
import { fetchPendingUsers, approveUser, rejectUser } from '../../api/apiClient';
import PendingUsersList from './PendingUsersList';

const AdminDashboard: React.FC = () => {
    const [pendingUsers, setPendingUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPendingUsers = async () => {
            try {
                const users = await fetchPendingUsers();
                setPendingUsers(users);
            } catch (error) {
                console.error('Error fetching pending users:', error);
            } finally {
                setLoading(false);
            }
        };

        loadPendingUsers();
    }, []);

    const handleApprove = async (userId: string) => {
        try {
            await approveUser(userId);
            setPendingUsers(prev => prev.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error approving user:', error);
        }
    };

    const handleReject = async (userId: string) => {
        try {
            await rejectUser(userId);
            setPendingUsers(prev => prev.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error rejecting user:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <PendingUsersList 
                users={pendingUsers} 
                onApprove={handleApprove} 
                onReject={handleReject} 
            />
        </div>
    );
};

export default AdminDashboard;