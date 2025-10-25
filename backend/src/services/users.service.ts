import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repo';
import bcrypt from 'bcrypt';

export class UsersService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async registerUser(userData: Partial<User>): Promise<User> {
        const hashedPassword = await this.hashPassword(userData.password);
        const newUser = { ...userData, password: hashedPassword, status: 'PENDING' };
        return this.userRepository.createUser(newUser);
    }

    async approveUser(userId: string): Promise<User> {
        return this.userRepository.updateUserStatus(userId, 'APPROVED');
    }

    async rejectUser(userId: string): Promise<User> {
        return this.userRepository.updateUserStatus(userId, 'REJECTED');
    }

    async getPendingUsers(): Promise<User[]> {
        return this.userRepository.findUsersByStatus('PENDING');
    }

    private async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
}