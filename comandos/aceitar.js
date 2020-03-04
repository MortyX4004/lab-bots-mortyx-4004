const Discord = require ('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
    message.delete()

    moment.locale('pt-br')
    const member = message.mentions.members.first() || message.guild.members.get(args[0])
    const link = args[1]
    const channel = client.channels.get('681606522987610126')

    if(!message.member.roles.has('681146819753017358' || '681146819367010371')) return;

    if(!link) return message.channel.send('Coloque um link!').then(msg => msg.delete(10 * 1000)) 
    if(!member) return message.channel.send('Coloque um membro!').then(msg => msg.delete(10 * 1000)) 
    if(!link.startsWith('https://')) return message.channel.send('O link tem que começar com ``htpp``').then(msg => msg.delete(10 * 1000)) 

    const embed = new Discord.RichEmbed()
    .setDescription(`:servidor: | Sugestão aceita! - **[Dia: ${moment().format('LL')}]**`)
    .setColor('RANDOM')
    .setImage(link)
    channel.send(embed)
};
exports.help = {
    name: 'aceitar',
    uso: "!aceitar",
    permissao: "Desenvolvedor",
    descricao: "Usado para Ver as Sugestoes :]"
  }