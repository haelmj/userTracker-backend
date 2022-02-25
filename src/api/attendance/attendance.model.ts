import { Types } from "mongoose";

export class Attendance {
  private _id: Types.ObjectId;
  private userId: Types.ObjectId;
  private checkedIn: Date;
  private checkedOut: Date;

  constructor(
    _id: Types.ObjectId,
    userId: Types.ObjectId,
    checkedIn: Date,
    checkedOut: Date
  ) {
    this._id = _id;
    this.userId = userId;
    this.checkedIn = checkedIn;
    this.checkedOut = checkedOut;
  }
}