import { Schema } from 'mongoose';

export const SignupSchema = new Schema({
  botId: String,
  guildId: String,
  channelId: String,
  userId: String,
  token: String,
  requestTimestamp: String,
  signature: String,
  walletAddress: String,
  responseTimestamp: String
});
