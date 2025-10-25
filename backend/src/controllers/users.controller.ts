import { Request, Response } from 'express';
import { UsersService } from '../services/users.service';

export class UsersController {
    private usersService: UsersService;

    constructor() {
        this.usersService = new UsersService();
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.usersService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    public async getPendingUsers(req: Request, res: Response): Promise<void> {
        try {
            const pendingUsers = await this.usersService.getPendingUsers();
            res.status(200).json(pendingUsers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async approveUser(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.id;
            const updatedUser = await this.usersService.approveUser(userId);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    public async rejectUser(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.id;
            await this.usersService.rejectUser(userId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}