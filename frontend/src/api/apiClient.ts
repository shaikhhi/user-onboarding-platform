import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const registerUser = async (userData) => {
    const response = await apiClient.post('/users/register', userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
};

export const fetchPendingUsers = async () => {
    const response = await apiClient.get('/users/pending');
    return response.data;
};

export const approveUser = async (userId) => {
    const response = await apiClient.post(`/users/approve/${userId}`);
    return response.data;
};

export const rejectUser = async (userId) => {
    const response = await apiClient.post(`/users/reject/${userId}`);
    return response.data;
};