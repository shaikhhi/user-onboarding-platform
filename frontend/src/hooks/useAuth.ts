import { useState, useEffect } from 'react';
import { apiClient } from '../api/apiClient';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await apiClient.get('/auth/me');
                setUser(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = async (credentials) => {
        try {
            const response = await apiClient.post('/auth/login', credentials);
            setUser(response.data);
        } catch (err) {
            setError(err);
        }
    };

    const logout = async () => {
        try {
            await apiClient.post('/auth/logout');
            setUser(null);
        } catch (err) {
            setError(err);
        }
    };

    return { user, loading, error, login, logout };
};

export default useAuth;