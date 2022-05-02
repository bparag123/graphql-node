import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    phone: {
        type: String
    }
})

export default new mongoose.model("User", userSchema)