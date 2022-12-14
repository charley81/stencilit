import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: ["true", "please add a goal description"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Goal", goalSchema);
