import mongoose, { Schema, Document } from "mongoose";
import { UserVerification } from "../classes/UserVerificationClass";

const UserVerificationSchema = new Schema<UserVerification & Document>({
  isVerified: { type: Boolean, default: false },
  verifyCode: { type: String },
  verifyCodeExpiry: { type: Date },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date },
});

export const UserVerificationModel = mongoose.model<UserVerification & Document>(
  "UserVerification",
  UserVerificationSchema
);
