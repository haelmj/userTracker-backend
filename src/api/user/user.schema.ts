import { Schema, Model, model } from "mongoose";
import { User } from "./user.model";

const UserSchema = new Schema<User, Model<User>>({});

export const UserModel = model<User>("branch", UserSchema);
