import { Document } from 'mongoose';

export interface BlogPost extends Document {
  id?: number;
  title: string;
  content: string;
}
