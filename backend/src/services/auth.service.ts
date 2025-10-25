import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repo';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(userData: Partial<User>): Promise<User> {
        const hashedPassword = await this.hashPassword(userData.password);
        const newUser = await this.userRepository.create({
            ...userData,
            password: hashedPassword,
            status: 'PENDING'
        });
        return newUser;
    }

    async login(email: string, password: string): Promise<string> {
        const user = await this.userRepository.findByEmail(email);
        if (!user || !(await this.comparePasswords(password, user.password))) {
            throw new Error('Invalid credentials');
        }
        return this.generateToken(user);
    }

    private async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    private async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }

    private generateToken(user: User): string {
        const payload = { id: user.id, email: user.email };
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
}