const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Kayıt Komutları')
.setTimestamp()
.addField('t!kayıt','Mevcut Kanal Kayıtını Gösterir.')
.addField('t!kayıt-rol','Kayıt Rolünü Belirlersiniz.')
.addField('t!kayıt-log','Kayıt Log Kanalını Belirlersiniz.')
.addField('t!kayıt-kanal','Kayıt Kanalını Belirlersiniz.')
.setFooter('Toxit | Kayıt Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yardım-kayıt'], 
  permLevel: 0 
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};