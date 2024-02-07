import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, //this is to create relation with other collections
      ref: "User", //this gives the reference as which collection to connect
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], //array of sub todo's
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
