export interface User {
    id: number;
    username: string;
    email: string;
    passwordHash: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    createdAt: Date;
    updatedAt: Date;
}