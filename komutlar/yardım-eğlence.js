const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Toxit | Eğlence Komutları`, client.user.avatarURL) 
      .setDescription('**[Destek Sunucusu](https://discord.gg/xvhdVxt)**')
.setThumbnail(client.user.avatarURL)
      .addField('**Komutlar:**', '`espri`, `rip`, `kralol`, `1vs1`, `wasted`, `yazı-tura`, `doğrulukcesaret`, `alkış`, `dcdekiyıkık`, `tutuklandın`, `tkm`,  `mesajdöndür`, `balıktut`, `spoiler`, `stresçarkı`, `manzara`, `atasözü`, `steam`, `ateşle`, `kapaklaflar`,`playstore`')
    .setFooter(``, client.user.avatarURL)
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
    name: 'eğlence',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};