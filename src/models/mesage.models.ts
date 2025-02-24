import mongoose , {Schema , Document} from 'mongoose';
import { Imessage } from '../interface';
import { ModelType } from '../interface/const';



const mongoSchema = new Schema<Imessage>(
  {
    sender_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Imessage>(ModelType.message, mongoSchema);