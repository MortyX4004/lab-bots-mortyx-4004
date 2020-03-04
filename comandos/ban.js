const Discord = require ('discord.js')

exports.run = async (client, message, args) => {

    if(!message.member.roles.has('681146819367010371' || '682264934675251237' || '682198679620157481')) return;
    if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply("Não tenho permissão!")

    const member = message.mentions.members.first()
    if(!member) return message.reply('você não informou o membro').then(m => m.delete(5 * 1000))

    message.channel.send(`O usuário ${member} foi banido!`)
    member.ban()
}
// || '682264934675251237' || '682198679620157481'
exports.help = {
    name: 'ban',
    uso: "ban < Membro >",
    permissao: "Desenvolvedor",
    descricao: ""
  }