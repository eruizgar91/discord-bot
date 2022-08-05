import { Client, ClientOptions } from 'discord.js'
import interactionCreate from './listeners/interactionCreate'
import ready from './listeners/ready'

const token =
  'MTAwNTA1NzkwMjI0OTI2NzIwMA.Gpnmqd.7N5pMU-lu4iuKlQcNVv3_OfvcKfwIMM1g8bNhs'

console.log('Bot is starting...')

const client = new Client({
  intents: [],
})

ready(client)
client.login(token)
interactionCreate(client)

console.log(client)
