const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args,Database) => {
//if(message.author.id != "665200472596152341") return message.reply("Voce nao pode usar esse comando")
message.channel.send(`<a:carregando:682694077434691619> Carregando Dados`).then(msg =>{
setTimeout(()=>{ msg.edit(`<a:carregando:682694077434691619> Processando Dados`)},4000)    
const embed = new MessageEmbed()
let cont = 0;let array=[],dono=[]
let opa=[];let i = 0;let idb=[]
embed.setTitle("Lista de Bots salvo")
client.guilds.cache.get("680888911668707480").members.cache.map( x =>{
if(x.user.bot)
{
Database.Bots.findOne({idbot: x.user.id}, function(erro, dados) {   
if(dados)
{
cont++;
array.push(dados.nome)
dono.push(dados.nomedono)
}})}
})
setTimeout(() =>{
if(cont >= 0){
for(i = 0;i <= cont-1;i++)
{
opa.push(`${i} - ${array[i]} - ${dono[i]}`)
}
}
embed.setDescription(opa)
message.channel.send({embed})
msg.delete()
array=[]
opa=[]
},7000)
})
}
exports.help = {
  name: 'bots',
  uso: "!bots",
  permissao: "Desenvolvedor",
  descricao: "Usado para Saber Meus Comandos :]"
}