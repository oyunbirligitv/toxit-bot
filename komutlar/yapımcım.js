const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    .addField('**Yapımcım: **', 'Melih Efe Karataş')
    .addField('**Yapımcımın Kanalı: **', 'https://www.youtube.com/channel/UCHJHR0I2Cdd2MwcO5f-XDyQ?view_as=subscriber')
    .addField('**Yapımcımın Discord Adresi **', 'https://discord.gg/3FcgPTX')
    .addField('**Destek Sunucum **', 'https://discord.gg/NsREtfK')
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapimcim'
};




