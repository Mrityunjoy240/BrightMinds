import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAttendance extends Document {
  studentId: mongoose.Types.ObjectId;
  class: string;
  subject: string;
  date: Date;
  status: 'Present' | 'Absent' | 'Late';
  markedBy: mongoose.Types.ObjectId;
}

const attendanceSchema = new Schema<IAttendance>({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  class: { type: String, required: true },
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['Present', 'Absent', 'Late'], required: true },
  markedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

attendanceSchema.index({ studentId: 1, date: 1, subject: 1 }, { unique: true });

export const Attendance: Model<IAttendance> = mongoose.models.Attendance || mongoose.model<IAttendance>('Attendance', attendanceSchema);