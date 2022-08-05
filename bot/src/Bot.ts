import { Client, ClientOptions } from 'discord.js'
import interactionCreate from './listeners/interactionCreate'
import ready from './listeners/ready'
;(async () => {
  const token =
    'MTAwNTA1NzkwMjI0OTI2NzIwMA.GV2iJ_.8uFz8lEFZ7HyebxlFZgVBZsZnLTG8zQn2fyCX8'
  console.log('Bot is starting...')

  const client = new Client({
    intents: [],
  })

  ready(client)

  client.login(token)
  interactionCreate(client)

  console.log('client is ready')
})()
