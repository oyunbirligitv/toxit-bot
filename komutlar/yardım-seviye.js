const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Seviye Komutları')
.setTimestamp()
.addField('t!seviye','Seviyenizi atar.')
.addField('t!seviye-ayarlar','seviye komutlarının sunucudaki ayarlarını atar.')
.addField('t!seviye-aç','Seviye Sistemini açarsınız.')
.addField('t!seviye-kapat','Seviye sistemini kapatırsınız.')
.addField('t!seviye-log','Level atlayan kullanıcıları bu kanala atar.')
.addField('t!seviye-rol','Seviye ödülünü ayarlarsınız.')
.addField('t!seviye-xp','mesaj başına gelecek puanı ayarlarsınız.')
.setFooter('Toxit Seviye Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'seviye-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};