import {ObjectId} from 'bson';

interface Attendance {
  _id: ObjectId;
  userId: ObjectId;
  checkedIn: Date;
  checkedOut: Date;
};

export default Attendance;