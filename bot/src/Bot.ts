import { Client, ClientOptions } from 'discord.js'
import interactionCreate from './listeners/interactionCreate'
import ready from './listeners/ready'

const token =
  ''

console.log('Bot is starting...')

const client = new Client({
  intents: [],
})

ready(client)
client.login(token)
interactionCreate(client)

console.log(client)
