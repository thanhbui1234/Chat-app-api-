import mongoose , {Schema } from "mongoose";
import { IUser } from "../interface";
import { ModelType } from "../interface/const";


const UserSchema = new Schema<IUser>(
  {
    user_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age : {type: String }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>(ModelType.user, UserSchema);