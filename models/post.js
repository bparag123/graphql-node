import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  text: String,
  createdAt: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
});

const postSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  body: {
    type: String,
  },
  title: {
    type: String,
  },
  comments: {
    type: [commentSchema],
  },
});

export default mongoose.model("Post", postSchema);
