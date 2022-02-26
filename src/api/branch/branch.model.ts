import { ObjectId } from "bson";
import { Schema, Model, model} from "mongoose";
import Branch from "./branch.interface";

const branchesSchema = new Schema<Branch, Model<Branch>>({
  _id: ObjectId,
  location: String,
  latitude: Number,
  longitude: Number,
  date_created: Date,
  last_modified: Date,
})

export const BranchModel = model<Branch>('branches', branchesSchema);