import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITest extends Document {
  title: string;
  subject: string;
  class: string;
  teacherId: mongoose.Types.ObjectId;
  scheduledDate: Date;
  duration: number;
  totalMarks: number;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  results: {
    studentId: mongoose.Types.ObjectId;
    marks: number;
    submittedAt: Date;
  }[];
  createdAt: Date;
}

const testSchema = new Schema<ITest>({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  class: { type: String, required: true },
  teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  scheduledDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' },
  results: [{
    studentId: { type: Schema.Types.ObjectId, ref: 'User' },
    marks: { type: Number },
    submittedAt: { type: Date }
  }],
  createdAt: { type: Date, default: Date.now },
});

export const Test: Model<ITest> = mongoose.models.Test || mongoose.model<ITest>('Test', testSchema);