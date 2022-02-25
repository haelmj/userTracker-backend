import { Schema, Model, Types, model } from "mongoose";
import { Attendance} from "./attendance.model";

const AttendanceSchema = new Schema<Attendance, Model<Attendance>>({
  _id: { type: Types.ObjectId, required: true },
  userId: { type: Types.ObjectId, required: true },
  checkedIn: Date,
  checkedOut: Date,
});

export const AttendanceModel = model<Attendance>("attendance", AttendanceSchema);