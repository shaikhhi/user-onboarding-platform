import React, { useEffect, useState } from 'react';
import { apiClient } from '../../api/apiClient';

const UserDashboard: React.FC = () => {
    const [userStatus, setUserStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserStatus = async () => {
            try {
                const response = await apiClient.get('/user/status');
                setUserStatus(response.data.status);
            } catch (error) {
                console.error('Error fetching user status:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserStatus();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Dashboard</h1>
            <p>Your current status: {userStatus}</p>
        </div>
    );
};

export default UserDashboard;