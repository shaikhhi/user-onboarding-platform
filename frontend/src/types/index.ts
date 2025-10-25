export interface User {
    id: string;
    username: string;
    email: string;
    password: string; // This should be hashed in the backend
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    createdAt: Date;
    updatedAt: Date;
}

export interface AdminUser extends User {
    role: 'ADMIN';
}

export interface RegularUser extends User {
    role: 'USER';
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface RegistrationData {
    username: string;
    email: string;
    password: string;
}