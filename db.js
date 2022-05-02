import mongoose from "mongoose";
import { config } from "dotenv";
config()

const conn = mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected To Database"))
    .catch((e) => console.log(e.message))