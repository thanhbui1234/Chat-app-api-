import mongoose , {Schema , Document} from 'mongoose';

export interface Imessage extends Document{
    senderId: string;
    receiverId: string;
    message: string;
    createAt: Date;
}

const mongoSchema = new Schema({
    senderId: {type: mongoose.Schema.Types.ObjectId ,  ref:'User' , required: true},
    receiverId: {type: mongoose.Schema.Types.ObjectId, ref :'User' , required: true},
    content : {type: String , required: true},
},{
    timestamps: true
})

export default mongoose.model<Imessage>('Message', mongoSchema);