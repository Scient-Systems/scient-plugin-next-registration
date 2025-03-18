import { IUserRepository } from "../IUserRepository";
import mongoose from "mongoose";
export declare class MongoUserRepository implements IUserRepository {
    updateUserFields(userId: string, extraFields: Record<string, any>): Promise<{
        success: boolean;
        message: string;
        user: any;
    }>;
    registerUser(firstName: string, lastName: string, userName: string, email: string, password: string, UserModel: mongoose.Model<any>, extraFields?: Record<string, any>): Promise<{
        success: boolean;
        message: string;
        userId?: any;
        verifyCode?: string;
    }>;
    verifyUser(userName: string, code: string, UserModel: mongoose.Model<any>): Promise<{
        success: boolean;
        message: string;
    }>;
    forgotPassword(email: string, url: string, UserModel: mongoose.Model<any>): Promise<{
        success: boolean;
        message: string;
        resetLink?: undefined;
    } | {
        success: boolean;
        message: string;
        resetLink: string;
    }>;
    resetPassword(token: string, newPassword: string, UserModel: mongoose.Model<any>): Promise<{
        success: boolean;
        message: string;
    }>;
}
