import { ObjectId } from "bson";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userID: ObjectId,
    userName: String,
    firstName: String,
    lastName: String,
    gender: String,
    branchID: ObjectId
})

export default mongoose.model('users', userSchema)