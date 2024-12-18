import { Schema, Model, Types} from "mongoose";

interface Attendance {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    checkedIn: Date;
    checkedOut: Date;
};

interface Branch {
    _id: Types.ObjectId;
    location: String;
    latitude: Number;
    longitude: Number;
    date_created: Date;
    last_modified: Date;
}

interface User {
    _id: Types.ObjectId;
    branch_id: Types.ObjectId;
    user_name: String;
    first_name: String;
    last_name: String;
    password_hash: String;
    password_salt: String;
    gender: String[];
    email: String;
    user_type: String[];
    date_created: Date;
    last_modified: Date;

}

const userSchema = new Schema<User, Model<User>>({
    _id: {type: Types.ObjectId, required: true},
    user_name: {
        type: String,
        required: true
    },
    branch_id: {type: Types.ObjectId, required: true},
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

const branchesSchema = new Schema<Branch, Model<Branch>>({
    _id: Types.ObjectId,
    location: String,
    latitude: Number,
    longitude: Number,
    date_created: Date,
    last_modified: Date,
})
const attendanceSchema = new Schema<Attendance, Model<Attendance>> ({
    _id: {type: Types.ObjectId, required: true},
    userId: {type: Types.ObjectId, required: true},
    checkedIn: Date,
    checkedOut: Date
})

module.exports = [ attendanceSchema, branchesSchema, userSchema ];