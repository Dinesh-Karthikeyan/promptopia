import {Schema, model, models} from 'mongoose'

const promptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    prompt: {
        type:String,
        required: [true, "A Prompt message is required"]
    },
    tag: {
        type:String,
        required: [true, "Tag is neccesary to show prompt in search"]
    }
})

const Prompt = models.Prompt || model("Prompt", promptSchema)

export default Prompt