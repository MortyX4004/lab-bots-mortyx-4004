const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

const embed = new MessageEmbed()   
embed.setColor("BLUE")    
embed.setTitle("Lista de Comandos")
let x = client.commands.forEach(y => {
    if(y.help.permissao == "Desenvolvedor") return ;
    embed.fields.push(
        {
        name: `!${y.help.name}`,
        value: `Descrição: ${y.help.descricao}\nUso: ${y.help.uso}`
        }
      )
})
message.author.send({ embed: embed })
.then(() => message.react('✔️'))
.catch(() => message.reply('Nao consegui Enviar Para seu DM!'))
}
exports.help = {
  name: 'ajuda',
  uso: "!ajuda",
  permissao: "Usuario",
  descricao: "Usado para Saber Meus Comandos :]"
}