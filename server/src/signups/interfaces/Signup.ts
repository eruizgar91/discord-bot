import { Document } from 'mongoose';

export interface Signup extends Document {
  id?: number;
  botId: string;
  guildId: string;
  channelId: string;
  userId: string;
  token: string;
  requestTimestamp: string;
  signature: string;
  walletAddress: string;
  responseTimestamp: string;
}
