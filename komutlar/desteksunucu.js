const Discord = require("discord.js");
const loglar = require("../loglar.json");

//Fynx Code

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`Fynx-Bot`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField("Linkler", `Destek Sunucusu:[https://discord.gg/Qf83PZx]()`)
    .setFooter(
      `${message.author.username} tarafından istendi. |`,
      message.author.avatarURL
    );
  return message.channel.sendEmbed(yardım);
};

//Fynx Code

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu"],
  permLevel: 0
};

exports.help = {
  name: "desteksunucu",
  description: "yardım",
  usage: "yardım"
};

//Fynx Code
