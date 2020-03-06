const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args , Database) => {
let max = 0;
let mencao = message.mentions.members.first();
if(!mencao) return message.reply("Usuario Invalido")
let role = message.guild.members.cache.get(mencao.id).roles.cache.has("682192809209626664");
if(!role) {
message.guild.members.cache.get(mencao.id).roles.add("682192809209626664")
message.channel.send(`O Usuario ${mencao.user.username} Acaba de Adquirir VIP`)
    let canal = message.guild.channels.create(`${mencao.user.username}`, { type: 'text' }).then(async x =>{
    let local = await x.setParent("685590837266350128");
    await x.updateOverwrite(message.guild.roles.cache.get('682192809209626664').id, {
    'VIEW_CHANNEL':false     
    })
    await x.updateOverwrite(mencao.user.id, {
        'VIEW_CHANNEL': true,
          'SEND_MESSAGES': true
    });  
    await Database.Membros.findOne({membroid: mencao.user.id}, async function(erro, dados) {   
        if(dados)
        {
            dados.salavip = x.id;
            dados.save();
        }
    })
})
}else{
if(max == 0)
{
message.guild.members.cache.get(mencao.id).roles.remove("682192809209626664")
message.channel.send(`O VIP do Usuario ${mencao.user.username} Foi Removido`)    
max = 1;
await Database.Membros.findOne({membroid: mencao.user.id}, async function(erro, dados) {   
    if(dados)
    {    
    let morty = message.guild.channels.cache.get(dados.salavip)
    morty.delete();   
    }
})
}
}
setTimeout(() =>{
max = 0;
},1000)
}
exports.help = {
    name: 'vip',
    uso: "vip < membro >",
    permissao: "Desenvolvedor",
    descricao: ""
  }