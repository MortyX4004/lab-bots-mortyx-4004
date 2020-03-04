const Discord = require('discord.js')

exports.run = async (client, message, args,Database) => {
let roles = [],pagina = 0,pagetotal = 0;cont = 0
message.guild.roles.map(x =>{
roles.push(x.name)
cont++;
})
pagina = 1;
var resto = cont % 2;
if(resto == 0){//par
pagetotal = cont / 10;
}else{//impar
pagetotal = cont+1
pagetotal /= 10
}
setTimeout(()=>{
const embed = new Discord.RichEmbed()
.setTitle("Cargos do Servidor")
.setFooter(`Pagina: ${pagina}/${pagetotal}`)
if(pagina <= 1)
{
for(let i = 0;i <= 10;i++)
{
embed.addField(`Cargo`,roles[i])
}
}
message.channel.send(embed).then(async msg =>{
await msg.react("⬅️");
await msg.react("➡️");
let filtro = (reaction,usuario) => reaction.emoji.name === "➡️" && usuario.id === message.author.id
const coletor = msg.createReactionCollector(filtro, {max: 1, time: 60000})
coletor.on("collect", xx =>{ 
for(let i=10;i <= 20;i++)
{
embed.addField(`Cargo`,roles[i])
pagina = 2;
}   
setTimeout(()=>{
msg.edit(embed)
},1000)
})//coletor
})
},2000)
}
exports.help = {
  name: 'pages',
  uso: "!pages",
  permissao: "Desenvolvedor",
  descricao: "Usado para Saber Meus Comandos :]"
}