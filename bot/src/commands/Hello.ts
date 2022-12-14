import { CommandInteraction, Client } from 'discord.js'
import { Command } from '../Command'
import { ethers } from 'ethers'
import fetch from 'node-fetch'
import axios from 'axios'

export const Hello: Command = {
  name: 'hello',
  description: 'Returns a greeting',
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = 'Hello there!'
    client.users.fetch(interaction.user).then(async (user) => {
      try {
        //Send the message to the user to sign
        const token = ethers.utils.hexValue(ethers.utils.randomBytes(20))
        // Need logic here to avoid duplicates
        const res = await axios.get(
          `http://localhost:3000/signups/user/${interaction.user.id}`,
          { headers: { 'Content-Type': 'application/json' } }
        )
        if(res.data.walletAddress){
          console.log('You were logged yet.')
        }
        
        const result = await axios.post(
          `http://localhost:3000/signups`,
          {
            botId: client.user?.id,
            userId: interaction.user.id,
            token: token,
            requestTimestamp: Date.now().toString(),
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
        user.send(
          `Can you sign the message? http://localhost:3001?token=${token}&id=${result.data._id}`
        )
      } catch (err) {
        console.log(err)
      }
    })
    await interaction.followUp({
      ephemeral: true,
      content,
    })
  },
}
