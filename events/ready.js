const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "t!yardım🙏",
        "Yapımcı:Melih Efe Karataş👤",
         "Kanal:Oyun Birliği Tv👍",
         "Kullanıcıya Hizmet Veriyor😁",
         "Göreve Hazır💥",
         "Maske😷,Mesafe",
          "Toxit Bot",
          "t!eğlence🤣",
           "Discord:Oyun Birliği Tv",
           "t!yardım👏,t!yetkili👏,t!eğlence👏",
           "Maşallah Diyin Nazar Değmesin 🧿"
    ];

    setInterval(function() {

      
        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://discord.gg/6HCr854" );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
};
