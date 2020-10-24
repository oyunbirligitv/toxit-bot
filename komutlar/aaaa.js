const Discord = require(`discord.js`);

 

exports.run = async (client, message, args) => {

 

  if(!message.member.hasPermission(`MANAGE_GUILD`)) return message.channel.send(`Bu komutu kullanabilmek için yetkin yetersiz.`)

 

  let kişi = message.mentions.users.first()

  if(!kişi) return message.channel.send(`Bir kişi etiketlemelisin.`)

  let isim = args[1];

  if(!isim) return message.channel.send(`${kişi}, için oluşturacağım kanalın ismini girmelisin.`)

  let everyone = message.guild.roles.find(r => r.name === `@everyone`)

 

  message.guild.createChannel(isim, `text`).then(channel => { channel.overwritePermissions(kişi, {

  'SEND_MESSAGES': true,

  'READ_MESSAGE_HISTORY': true,

  'VIEW_CHANNEL': true })

 

  channel.overwritePermissions(everyone, {

  'VIEW_CHANNEL': false}) })

 

  message.channel.send(`${kişi}, için özel kanal oluşturuldu.`)

 

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

}

 

exports.help = {

  name: 'kanalaç'

}

