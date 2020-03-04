const Discord = require('discord.js')

exports.run = async (client, message, args,Database) => {
if(!args[0]) return message.reply("❌ | Voce nao digitou um ID")
Database.Bots.findOne({idbot: args[0]}, function(erro, dados) {   
if(dados)
{
if(dados.autorizado == "1") return message.reply("🚫 | Esse BOT Já está Autorizado!");
dados.autorizado = 1;
dados.save();
const embed = new Discord.RichEmbed()
.setTitle("Autorização")
.setDescription(`Nome: ${dados.nome}
ID: ${args[0]}
Dono: ${dados.nomedono}
`)
message.channel.send(embed)
client.users.get(dados.donoid).send(`Olá ${dados.nomedono}, Seu BOT ${dados.nome} Foi Autorizado!`)
}else{message.reply("❌ | Este ID Não está no banco de dados")}
})
}
exports.help = {
  name: 'autorizar',
  uso: "!autorizar",
  permissao: "Desenvolvedor",
  descricao: "Usado para Saber Meus Comandos :]"
}