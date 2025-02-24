import { Types } from 'mongoose';
export interface IUser extends Document {
    user_name : string,
    email : string,
    password : string,
    age : string
}


export interface Imessage extends Document {
  sender_id: Types.ObjectId;
  receiver_id: Types.ObjectId;
  content: string;
  createdAt: Date;
}
