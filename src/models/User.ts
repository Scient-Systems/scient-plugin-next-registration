import mongoose, { Schema, Document } from "mongoose";

export interface BaseUser extends Document {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  role: string;
  isVerified: boolean;
  verifyCode?: string;
  verifyCodeExpiry?: Date;
  resetToken?: string;
  resetTokenExpiry?: Date;
}

export const baseUserSchemaFields: Record<string, any> = {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  isVerified: { type: Boolean, default: false },
  verifyCode: { type: String },
  verifyCodeExpiry: { type: Date },
  resetToken: { type: String, default: "" },
  resetTokenExpiry: { type: Date, default: null },
};

// export class ConnectUser implements BaseUser{
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   userName: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, required: true, default: "user" },
//   isVerified: { type: Boolean, default: false },
//   verifyCode: { type: String },
//   verifyCodeExpiry: { type: Date },
//   resetToken: { type: String, default: "" },
//   resetTokenExpiry: { type: Date, default: null },

// }

