const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args , Database) => {
if(!message.member.roles.cache.has("682192809209626664")) return message.reply("Comando Restrito para VIPS!")
if(!args[0]) return message.reply("Use: !cbot <id do bot> <cor>")
Database.Bots.findOne({idbot: args[0]}, async function(erro, dados) {   
if(dados){
if(message.author.id != dados.donoid) return message.reply("Esse Bot nao é seu!")
if(!args[1]) return message.reply("Coloque uma Cor")
client.guilds.cache.get("680888911668707480").roles.cache.map(x =>{
    if(x.name == dados.idbot)
    {
    x.setColor(args[1]).then(()=>{
        message.reply("Cor do seu Bot foi Alterada")
    }).catch(() =>{
        message.reply("Ocorreu um Erro")
    })
    }
    })
}else{
    message.reply("ID Invalido ")
}
})
}
exports.help = {
  name: 'cbot',
  uso: "cbot < Bot > < Cor >",
  permissao: "Desenvolvedor",
  descricao: "Veja informaçoes das Propriedades"
}