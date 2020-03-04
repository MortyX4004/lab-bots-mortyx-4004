const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()
message.channel.send(`**${args.join(' ')}**`)  
}
exports.help = {
  name: 'say',
  uso: "!say",
  permissao: "Desenvolvedor",
  descricao: "Usado para Saber Meus Comandos :]"
}