export declare const registerUser: (UserModel: any, UserVerificationModel: any, userData: any) => Promise<{
    success: boolean;
    message: string;
    verifyCode?: undefined;
    userId?: undefined;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    verifyCode: string;
    userId?: undefined;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    verifyCode: string;
    userId: any;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    error: any;
    verifyCode?: undefined;
    userId?: undefined;
}>;
export declare const verifyUser: (UserModel: any, UserVerificationModel: any, userName: string, code: string) => Promise<{
    success: boolean;
    message: string;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    error: any;
}>;
export declare const forgotPassword: (UserModel: any, email: string, url: string) => Promise<{
    success: boolean;
    message: string;
    resetLink?: undefined;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    resetLink: string;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    error: any;
    resetLink?: undefined;
}>;
export declare const resetPassword: (UserModel: any, token: string, newPassword: string) => Promise<{
    success: boolean;
    message: string;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    error: any;
}>;
