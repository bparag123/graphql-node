import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    body: {
        type : String
    },
    title : {
        type : String
    }
})


export default mongoose.model("Post", postSchema)