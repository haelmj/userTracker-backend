import { ObjectId } from "bson";
import { Schema, Model, model } from "mongoose";
import User from "./user.interface";

const userSchema = new Schema<User, Model<User>>({
    _id: {type: ObjectId, required: true},
    user_name: {
        type: String,
        required: true
    },
    branch_id: {type: ObjectId, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    password_hash: {type: String, required: true},
    password_salt: {type: String, required: true},
    gender: {type: [String]},
    email: {type: String, required: true},
    user_type: {type: [String], required: true},
    date_created: {type: Date, required: true},
    last_modified: {type: Date, required: true}
})


export const UserModel = model<User>("branch", userSchema);
