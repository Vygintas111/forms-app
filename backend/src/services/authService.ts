import {User} from "../entities/User";
import {AppDataSource} from "../config/database";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const userRepository = AppDataSource.getRepository(User);

export class AuthService {
    static async register(email: string, password: string, name: string)  {
        const existingUser = await userRepository.findOne({ where: {email} });
        if(existingUser) {
            throw new Error('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = userRepository.create({email, password: hashedPassword, name});
        await userRepository.save(user);
        const token = this.generateToken(user);

        return {user, token};
    }

    static async login(email: string, password: string) {
        const user = await userRepository.findOne({ where: {email} });
        if(!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = this.generateToken(user);
        return {user, token};
    }

    private static generateToken(user: User) {
        return jwt.sign({id: user.id, email: user.email, isAdmin: user.isAdmin},
            process.env.JWT_SECRET!,
            {expiresIn: '24h'}
        );
    }
}