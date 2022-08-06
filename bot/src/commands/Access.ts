import axios from 'axios'
import {
  CommandInteraction,
  Client,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  ActionRowBuilder,
  messageLink,
} from 'discord.js'
import { ethers } from 'ethers'
import { Command } from '../Command'

export const Access: Command = {
  name: 'access',
  description: 'Give access to some channels',
  run: async (client: Client, interaction: CommandInteraction) => {
    let content = 'You are logged'
    await client.users.fetch(interaction.user).then(async (user) => {
      try {
        const result = await axios.get(
          `http://localhost:3000/signups/user/${interaction.user.id}`,
          { headers: { 'Content-Type': 'application/json' } }
        )
        const provider = ethers.getDefaultProvider('https://bold-little-glitter.matic-testnet.discover.quiknode.pro/d6ec12761cd7d33e88d1030ed9fa55ffe68d71c1')
        const balance = ethers.utils.formatEther(await provider.getBalance(result.data.walletAddress))
        if(balance){
          const members = await client.guilds.cache.values()
          // const channels = await client.channels.cache.values()
          console.log(members)
          // console.log(channels)
          console.log(await client.guilds.fetch("1005500240826204230"))
        }
        content = `You are logged with: ${result.data.walletAddress} and has ${balance}`

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
