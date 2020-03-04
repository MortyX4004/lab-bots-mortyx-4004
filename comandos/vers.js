const Discord = require('discord.js')

exports.run = async (client, message, args, Database) => {
let texto = ["665200472596152341","586164335592865792","336905723621670914","505878433998569472"]
if(texto.indexOf("<") > -1)
{}else{
let embed = new Discord.RichEmbed()
embed.setTitle("Sugestões Salvas")
embed.setColor("BLUE")
message.channel.send("<a:loading:681929901586120746> Calculando Dados!").then(msg => setTimeout(function(){  
msg.edit("<a:loading:681929901586120746> Processando Dados")
msg.delete(3000)
},3000)) 
let loop = message.guild.members.forEach(x =>{
Database.Sugestao.findOne({indice: x.id}, function(erro, dados) {   
if(dados)
{    
    embed.fields.push(
    {
    name: `${dados.nome} ID: ${x.id}`,
    value: `Sugestão -> ${dados.sugestao}`
    }
    )
}
})
})
setTimeout(function(){message.channel.send({embed: embed})}, 6000);  
}
}
exports.help = {
  name: 'vers',
  uso: "!vers",
  permissao: "Desenvolvedor",
  descricao: "Usado para Ver as Sugestoes :]"
}