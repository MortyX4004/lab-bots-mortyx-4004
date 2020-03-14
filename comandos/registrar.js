const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
exports.run = (client, message, args, Database) => {

if(!args[0]) return message.reply("Coloque o ID Do Usuario!")
Database.Seguranca.findOne({usuarioid: args[0]}, function(erro, dados) {
if(dados)
{
if(dados.stats == "Sucesso") return message.reply("Esse usuario ja está Registrado")
let embed = new MessageEmbed()
.setTitle("Registro")
.setDescription(`O Usuario ${message.guild.members.cache.get(args[0]).user.username} Foi Registrado`)
dados.stats = "Sucesso";
dados.save()
message.channel.send(embed)
let cargo = message.guild.roles.cache.get("685930835278692379")
let x = message.guild.roles.cache.get("681230712430395405")
message.guild.members.cache.get(args[0]).roles.add(x.id)
message.guild.members.cache.get(args[0]).roles.remove(cargo.id)
}else{
message.reply("ID Invalido ou O Usuario nao fez Login!")
}
})
}
exports.help = {
  name: 'registrar',
  uso: "!registrar",
  permissao: "Desenvolvedor",
  descricao: "Usado para Saber Meus Comandos :]"
}