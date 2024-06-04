import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.types.ObjectId,
        ref: "User"
    },
    channel: {
        type: Schema.types.ObjectId,
        ref: "User"
    }
})

export const subscription = mongoose.model("subscription", subscriptionSchema)