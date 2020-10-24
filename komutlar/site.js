const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle("Sitelerim")
    .setDescription("s")
    .setColor(0x00ffff)
    .setDescription(
  "Sitelerim Burda İlk Site Aktiftir Şuanlık"
    )
    .addField(
      "» Linkler",
      `[Davet Sitesi](https://dc-bot-davet.glitch.me)` +
        "**\n**" +
        `[Nitro Sitesi](https://ahmet-ali-gurhannerator.glitch.me)` +
        "**\n**" +
        `[Yakında]()`,
      false
    )
    .setFooter("iBOT | Yardım Komutları");

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["site"],
  permLevel: 0
};

exports.help = {
  name: "site",
  description: "Bot Davet İçin",
  usage: ".site"
};
