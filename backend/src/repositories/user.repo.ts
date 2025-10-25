import { User } from '../models/user.model';
import { getConnection } from 'typeorm';

export class UserRepository {
    async createUser(userData: Partial<User>): Promise<User> {
        const connection = await getConnection();
        const user = connection.getRepository(User).create(userData);
        return await connection.getRepository(User).save(user);
    }

    async findUserById(userId: string): Promise<User | null> {
        const connection = await getConnection();
        return await connection.getRepository(User).findOne(userId);
    }

    async findPendingUsers(): Promise<User[]> {
        const connection = await getConnection();
        return await connection.getRepository(User).find({ where: { status: 'PENDING' } });
    }

    async updateUserStatus(userId: string, status: string): Promise<User | null> {
        const connection = await getConnection();
        await connection.getRepository(User).update(userId, { status });
        return await this.findUserById(userId);
    }
}