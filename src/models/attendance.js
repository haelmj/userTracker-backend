import { ObjectId, Timestamp } from "bson";
import mongoose from "mongoose";

const attendanceSchema = mongoose.Schema({
    logID: ObjectId,
    userID: ObjectId,
    checkedIn: Timestamp,
    checkedOut: Timestamp
})

export default mongoose.model('attendanceLog', attendanceSchema)
