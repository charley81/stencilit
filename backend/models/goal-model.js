import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: ["true", "please add a goal description"],
    },
    isCompleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Goal", goalSchema);
