const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args,Database) => {
if(message.author.id != "665200472596152341");
message.channel.send("Espera Porra!").then(msg =>{
const embed = new MessageEmbed()
let opa=[]
embed.setTitle("Bots a serem Limpos!")
client.guilds.cache.get("680888911668707480").members.cache.map(x =>{
if(x.user.bot)
{
Database.Bots.findOne({idbot: x.user.id}, function(erro, dados) { 
if(!dados)
{
message.channel.send(`${x.user.username}( ${x.user.id }) Expulso!`)
x.kick();
}
})
}
})
setTimeout(() =>{
opa=[]
},5000)
})
}
exports.help = {
  name: 'limparbots',
  uso: "!limparbots",
  permissao: "Desenvolvedor",
  descricao: "Usado para Saber Meus Comandos :]"
}