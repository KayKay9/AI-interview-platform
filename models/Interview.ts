import mongoose, { Schema, Document } from "mongoose";

export interface IInterview extends Document {
  userId: string;
  questions: { question: string; answer: string; feedback?: string }[];
  createdAt: Date;
}

const InterviewSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  questions: [
    {
      question: String,
      answer: String,
      feedback: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Interview || mongoose.model<IInterview>("Interview", InterviewSchema);
