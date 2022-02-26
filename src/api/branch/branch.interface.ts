import {ObjectId} from 'bson';

interface Branch {
    _id: ObjectId;
    location: String;
    latitude: Number;
    longitude: Number;
    date_created: Date;
    last_modified: Date;
}

export default Branch;