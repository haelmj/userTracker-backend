import {ObjectId} from 'bson';

interface User {
    _id: ObjectId;
    branch_id: ObjectId;
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

export default User;