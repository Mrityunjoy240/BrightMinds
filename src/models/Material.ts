import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMaterial extends Document {
  title: string;
  type: 'Notes' | 'Question Paper' | 'Sheet' | 'Papers';
  subject: string;
  class: string;
  teacherId: mongoose.Types.ObjectId;
  fileUrl: string;
  fileSize: string;
  uploadedAt: Date;
}

const materialSchema = new Schema<IMaterial>({
  title: { type: String, required: true },
  type: { type: String, enum: ['Notes', 'Question Paper', 'Sheet', 'Papers'], required: true },
  subject: { type: String, required: true },
  class: { type: String, required: true },
  teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  fileUrl: { type: String },
  fileSize: { type: String },
  uploadedAt: { type: Date, default: Date.now },
});

export const Material: Model<IMaterial> = mongoose.models.Material || mongoose.model<IMaterial>('Material', materialSchema);