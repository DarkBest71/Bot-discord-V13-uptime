const Discord = require("discord.js");
    module.exports = {
        run: async (client, message, args) => {   
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        const embed = new Discord.MessageEmbed()
            .setTitle("Uptime")
            .setColor("RANDOM")
            .setDescription(`Je suis en ligne depuis **${days}** jours, **${hours}** heures, **${minutes}** minutes, **${seconds}** secondes`)
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor({name: `${message.author.username}`, iconURL: `${message.guild.iconURL({dynamic: true})}`})
            .setFooter({ text: `${client.user.username}`,iconURL: client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })})
            .setTimestamp();
            return message.reply({ embeds : [embed]});
},
name: 'uptime',
aliases: [],
description: "commande qui permet de voir depuis combien de temp le bot et connecté."
}