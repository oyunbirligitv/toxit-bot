const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Toxit | Yetkili Komutları`, client.user.avatarURL) 
      .setDescription('**[Destek Sunucusu](https://discord.gg/xvhdVxt)**')
.setThumbnail(client.user.avatarURL)
      .addField('**Genel**', '`kick`, `oylama`, `reboot`, `ban`, `banlist`, `duyuru`, `çekiliş`,`sabitle`, `partner`, `bot`')
      .addField('**Gerekli Komutlar**', '`otorol-sistemi`, `sayaç-sistemi`, `kayıt-sistemi`, `seviye-sistemi`, `sunucu-sistemi`')
      .addField('**Diğer**', '`sunucu-kurulum`, `herkesten-rol-al`, `herkese-rol-ver`, `unbanall`, `serverpanel`, `serverpanelkaldır`')
      .addField('**Sunucu Komutları**', '`ses-kanal-aç`, `kanal-açıklama`, `rol-liste`, `temizle`, `yaz`, `mesajat`, `güvenlik`, `rol-koruma`, `kanal-koruma`, `hgbbkanalayarla`, `reklam-engelleme`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yetkili',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};