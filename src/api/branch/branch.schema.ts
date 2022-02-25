import { Schema, Model, model } from "mongoose";
import { Branch } from "./branch.model";

const BranchSchema = new Schema<Branch, Model<Branch>>({
});

export const AttendanceModel = model<Branch>(
  "branch",
  BranchSchema
);
