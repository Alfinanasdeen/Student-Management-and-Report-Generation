import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  score: { type: Number, required: true },
  maxScore: { type: Number, required: true },
});

export default mongoose.model("Marks", marksSchema);
