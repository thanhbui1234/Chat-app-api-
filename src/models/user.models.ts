import mongoose , {Schema , Document} from "mongoose";

export interface IUser extends Document  {
    userName : string;
    email: string;
    password: string;
}

const UserSchema = new Schema({
    userName: {type: String , required: true},
    email: {type: String , required: true},
    passWord: {type: String , required: true}
},{
    timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);