const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

let codigos = [
    {"nome": "message.channel",
    "Propriedades": "`attachments` `author channel` `cleanContent` `client` `content` `createdAt` `createdTimestamp` `deletable` `deleted` `editable` `editedAt` `editedTimestamp` `edits` `embeds` `guild` `hit` `id` `member` `mentions` `nonce` `pinnable` `pinned` `reactions` `system` `tts` `typeurl` `webhookID`"}
]
exports.run = async (client, message, args) => {
if(!args[0]) return message.reply("❌ | Voce nao Especificou uma Propriedade")
codigos.map(x =>{
    if(x.nome != args) return message.reply("⚠️ | Nao encotrei essa Propriedade!")
    let cmd = new MessageEmbed()
    .setTitle("Javascript Command")
    .setDescription(`Nome: ${x.nome}
    Propriedades: ${x.Propriedades}`)
    .setColor("GREEN")    
    message.channel.send(cmd)
})
}
exports.help = {
  name: 'javascript',
  uso: "Javascript < Codigo >",
  permissao: "Usuario",
  descricao: "Veja informaçoes das Propriedades"
}