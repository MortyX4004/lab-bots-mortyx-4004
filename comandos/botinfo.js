const Discord = require('discord.js')
//const cpu = require('pidusage');
exports.run = async (client, message, args,Database) => {
//cpu(process.pid, async (err, stats) => {
if(!args[0]) return message.reply("Informe um ID ou Mencione o BOT")
let cargos=[]
let bot = args[0]
if(!args[0]){
bot = message.mentions.members.first().id
}
setTimeout(async () =>{
await Database.Bots.findOne({idbot: bot}, async function(erro, dados) {   
if(dados)
{
/*let opa = message.guild.members.get(args[0]).roles.map(async y =>{
  console.log(y.name)  
  if(y.name == "@everyone") return;
  cargos.push(y)
})
*/
message.guild.members.get(bot).roles.map(x =>{
if(x.name == "@everyone") return;
cargos.push(x)
})
let dono = message.guild.members.get(dados.donoid).user.displayAvatarURL
const embed = new Discord.RichEmbed()
if(bot == "681103541611397236")
{
embed.setTitle(`INFO BOT`)
embed.setThumbnail(message.guild.members.get(bot).user.displayAvatarURL)
embed.setFooter(`Dono: ${dados.nomedono}`,dono)
embed.setDescription(`**✅ Nome:** ${dados.nome}
**🧾 ID:** ${bot}
**📑 Livraria:** ${dados.livraria}
**📶 Ping**: ${Math.round(message.client.ping)}ms
**📁 Cargos:** ${cargos}
**🗒 Descrição:** ${dados.texto}
`)
}else{
embed.setTitle(`INFO BOT`)
embed.setThumbnail(message.guild.members.get(bot).user.displayAvatarURL)
embed.setFooter(`Dono: ${dados.nomedono}`,dono)
embed.setDescription(`✅**Nome:** ${dados.nome}
**🧾 ID:** ${bot}
**📑 Livraria:** ${dados.livraria}
**📁 Cargos:** ${cargos}
**🗒 Descrição:** ${dados.texto}
`)
}
message.channel.send(embed)
}
else{
message.reply("Informe um ID Certo!")
}
})
//})
},1000)
}
exports.help = {
  name: 'infobot',
  uso: "!infobot",
  permissao: "Usuario",
  descricao: "Usado para Ver o Perfil do BOT :]"
}