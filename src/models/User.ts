import mongoose, { Schema, Document, models } from "mongoose";

const PROJECT_TYPE = process.env.PROJECT_TYPE || "event-finder"; // Default to event-finder

interface User extends Document {
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
  businessCards?: mongoose.Types.ObjectId[];
  contacts?: mongoose.Types.ObjectId[];
  events?: mongoose.Types.ObjectId[];
  complaints?: mongoose.Types.ObjectId[];
}

const userSchemaFields: Record<string, any> = {
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

// ✅ Add dynamic fields based on the project
if (PROJECT_TYPE === "connect") {
  userSchemaFields.businessCards = [{ type: mongoose.Schema.Types.ObjectId, ref: "BusinessCard" }];
  userSchemaFields.contacts = [{ type: mongoose.Schema.Types.ObjectId, ref: "Contact" }];
} else if (PROJECT_TYPE === "event-finder") {
  userSchemaFields.events = [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }];
  userSchemaFields.complaints = [{ type: mongoose.Schema.Types.ObjectId, ref: "Complaint" }];
}

const userSchema = new Schema<User>(userSchemaFields, { timestamps: true });


const UserModel = models.User || mongoose.model<User>("User", userSchema);

export default UserModel;
