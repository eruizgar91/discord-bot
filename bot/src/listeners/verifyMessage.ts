import { Client, Interaction, CommandInteraction, ModalSubmitInteraction } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client): void => {
    client.on("message", async (interaction: Interaction) => {
        if (interaction.isModalSubmit()) {
            await handleSlashCommand(client, interaction);
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: ModalSubmitInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName);
    
    if (!slashCommand) {
        interaction.followUp({ content: "An error has occurred" });
        return;
    }

    await interaction.deferReply();

    slashCommand.run(client, interaction);
}; 