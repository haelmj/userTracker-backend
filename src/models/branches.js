import { ObjectId } from "bson";
import mongoose from "mongoose";

const branchesSchema = mongoose.Schema({
    branchID: ObjectId,
    location: String,
    geoLocation: Geolocation,
    emplpoyeeCount: Number
})

export default mongoose.model('branches', branchesSchema)