import { ObjectId } from 'bson'
import { Schema, Model, model } from 'mongoose'
import Attendance from './attendance.interface'

const AttendanceSchema = new Schema<Attendance, Model<Attendance>>({
  _id: { type: ObjectId, required: true },
  userId: { type: ObjectId, required: true },
  checkedIn: Date,
  checkedOut: Date
})

export const AttendanceModel = model<Attendance>('attendance', AttendanceSchema)
