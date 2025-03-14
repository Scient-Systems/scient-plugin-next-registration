"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgotPassword = exports.verifyUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const uuid_1 = require("uuid");
const userDatabaseAdapter_1 = require("../../databaseadapter/user/userDatabaseAdapter");
// 🟢 Register User
const registerUser = (UserModel, UserVerificationModel, userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("📌 Registering User:", userData);
        const { firstName, lastName, userName, email, password } = userData;
        if (!firstName || !lastName || !userName || !email || !password) {
            return { success: false, message: "All fields are required." };
        }
        const existingUser = yield userDatabaseAdapter_1.DatabaseAdapter.findOne(UserModel, { email });
        if (existingUser) {
            if (existingUser.isVerified) {
                return { success: false, message: "Email already registered & verified." };
            }
            else {
                // If user exists but is not verified, update the verification code
                const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
                const verifyCodeExpiry = new Date(Date.now() + 3600000);
                yield userDatabaseAdapter_1.DatabaseAdapter.update(UserVerificationModel, { userId: existingUser._id }, { verifyCode, verifyCodeExpiry });
                return { success: true, message: "Verification code resent.", verifyCode };
            }
        }
        // Create new user
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = yield userDatabaseAdapter_1.DatabaseAdapter.create(UserModel, {
            firstName, lastName, userName, email, password: hashedPassword, isVerified: false, verificationId: null
        });
        // Create verification entry
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
        const verifyCodeExpiry = new Date(Date.now() + 3600000);
        const verificationEntry = yield userDatabaseAdapter_1.DatabaseAdapter.create(UserVerificationModel, {
            userId: newUser._id, verifyCode, verifyCodeExpiry
        });
        // Update UserModel with verificationId
        yield userDatabaseAdapter_1.DatabaseAdapter.update(UserModel, { _id: newUser._id }, { verificationId: verificationEntry._id });
        return { success: true, message: "User registered successfully!", verifyCode, userId: newUser._id };
    }
    catch (error) {
        console.error("❌ Error registering user:", error);
        return { success: false, message: "Error occurred.", error: error.message };
    }
});
exports.registerUser = registerUser;
// 🟢 Verify User
const verifyUser = (UserModel, UserVerificationModel, userName, code) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("📌 Verifying User:", { userName, code });
        const user = yield userDatabaseAdapter_1.DatabaseAdapter.findOne(UserModel, { userName });
        if (!user)
            return { success: false, message: "User not found." };
        const verification = yield userDatabaseAdapter_1.DatabaseAdapter.findOne(UserVerificationModel, { userId: user._id });
        if (!verification || verification.verifyCode !== code || new Date(verification.verifyCodeExpiry) < new Date()) {
            return { success: false, message: "Invalid or expired verification code." };
        }
        yield userDatabaseAdapter_1.DatabaseAdapter.update(UserModel, { _id: user._id }, { isVerified: true });
        return { success: true, message: "Account verified successfully!" };
    }
    catch (error) {
        console.error("❌ Error verifying user:", error);
        return { success: false, message: "Error verifying user.", error: error.message };
    }
});
exports.verifyUser = verifyUser;
// 🟢 Forgot Password
const forgotPassword = (UserModel, email, url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("📧 Forgot Password Request:", email);
        const user = yield userDatabaseAdapter_1.DatabaseAdapter.findOne(UserModel, { email });
        if (!user)
            return { success: false, message: "User not found." };
        const resetToken = (0, uuid_1.v4)();
        const resetTokenExpiry = new Date(Date.now() + 3600000);
        yield userDatabaseAdapter_1.DatabaseAdapter.update(UserModel, { email }, { resetToken, resetTokenExpiry });
        const resetLink = `${url}/reset-password?token=${resetToken}`;
        return { success: true, message: "Password reset email sent.", resetLink };
    }
    catch (error) {
        console.error("❌ Error in Forgot Password:", error);
        return { success: false, message: "Internal server error", error: error.message };
    }
});
exports.forgotPassword = forgotPassword;
// 🟢 Reset Password
const resetPassword = (UserModel, token, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("🔑 Reset Password Request:", { token });
        const user = yield userDatabaseAdapter_1.DatabaseAdapter.findOne(UserModel, { resetToken: token });
        if (!user || new Date(user.resetTokenExpiry) < new Date()) {
            return { success: false, message: "Invalid or expired reset token." };
        }
        const hashedPassword = yield bcryptjs_1.default.hash(newPassword, 10);
        yield userDatabaseAdapter_1.DatabaseAdapter.update(UserModel, { email: user.email }, { password: hashedPassword, resetToken: null });
        return { success: true, message: "Password reset successfully." };
    }
    catch (error) {
        console.error("❌ Error resetting password:", error);
        return { success: false, message: "Error resetting password.", error: error.message };
    }
});
exports.resetPassword = resetPassword;
