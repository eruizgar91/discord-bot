import { CommandInteraction, Client } from 'discord.js'
import { Command } from '../Command'
import { ethers } from 'ethers'

export const Hello: Command = {
  name: 'hello',
  description: 'Returns a greeting',
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = 'Hello there!'
    client.users.fetch(interaction.user).then((user) => {
      try {
        //Send the message to the user to sign 
        const token = ethers.utils.hexValue(ethers.utils.randomBytes(20))

        user.send(`Can you sign the message? http://localhost:3000?${token}`)
        
      } catch (err) {
        console.log('err')
      }
    })

    await interaction.followUp({
      ephemeral: true,
      content,
    })
  },
}
