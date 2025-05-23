export declare const registerUser: (firstName: string, lastName: string, userName: string, email: string, password: string, extraFields?: Record<string, any>) => Promise<{
    success: boolean;
    message: string;
    verifyCode?: undefined;
    userId?: undefined;
    verifyCodeExpiry?: undefined;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    verifyCode: string;
    userId: any;
    verifyCodeExpiry: Date;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    error: any;
    verifyCode?: undefined;
    userId?: undefined;
    verifyCodeExpiry?: undefined;
}>;
export declare const verifyUser: (userName: any, code: any) => Promise<{
    success: boolean;
    message: string;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    error: any;
}>;
export declare const forgotPassword: (email: any, url: any) => Promise<{
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
export declare const resetPassword: (token: any, newPassword: any) => Promise<{
    success: boolean;
    message: string;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    error: any;
}>;
export declare const updateUserFields: (userId: string, extraFields: Record<string, any>) => Promise<{
    success: boolean;
    message: string;
    user?: undefined;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    user: any;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    error: any;
    user?: undefined;
}>;
