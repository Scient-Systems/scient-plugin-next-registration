import mongoose, { Schema, Document } from "mongoose";
import { User } from "../classes/UserClass";


const UserSchema = new Schema <User & Document>({
  userId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

export const UserModel = mongoose.model<User & Document>("User", UserSchema);
