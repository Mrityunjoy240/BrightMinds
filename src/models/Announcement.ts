import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAnnouncement extends Document {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  targetClass: string;
  postedBy: mongoose.Types.ObjectId;
  createdAt: Date;
}

const announcementSchema = new Schema<IAnnouncement>({
  title: { type: String, required: true },
  description: { type: String },
  priority: { type: String, enum: ['high', 'medium', 'low'], default: 'medium' },
  targetClass: { type: String, default: 'All' },
  postedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Announcement: Model<IAnnouncement> = mongoose.models.Announcement || mongoose.model<IAnnouncement>('Announcement', announcementSchema);