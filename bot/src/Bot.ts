import { Client, ClientOptions, MessageCollector } from 'discord.js'
import interactionCreate from './listeners/interactionCreate'
import ready from './listeners/ready'
;(async () => {
  const token =
    'MTAwNTA1NzkwMjI0OTI2NzIwMA.Ggc2Sw.nGq3HHIaNqULSiFq_eMcUYKPKWpGksLNutL2qw'
  console.log('Bot is starting...')

  const client = new Client({
    intents: [],
  })

  ready(client)

  client.login(token)
  interactionCreate(client)

  console.log('client is ready')
})()
