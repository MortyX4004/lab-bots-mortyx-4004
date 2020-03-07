const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args , Database) => {
if(message.author.id != "665200472596152341") return message.reply("Voce nao pode usar esse comando")
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
    await x.updateOverwrite(message.guild.roles.cache.get('681230712430395405').id, {
    'VIEW_CHANNEL':false     
    })    
    x.updateOverwrite(message.guild.roles.cache.get('680888911668707480'), {
     'VIEW_CHANNEL': false     
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
            Database.Bots.findOne({donoid: mencao.user.id}, async function(erro, valor) {   
            if(valor){
                await x.updateOverwrite(message.guild.members.cache.get(valor.idbot).id, {
                    'VIEW_CHANNEL': true,
                      'SEND_MESSAGES': true
                });   
            let cvip = await message.guild.roles.cache.get("685230453271298122")
            message.guild.members.cache.get(valor.idbot).roles.add(cvip.id)
            let ide = await message.guild.roles.cache.get(valor.idbot)
            if(!ide){
            let newcargo = message.guild.roles.create(valor.idbot)
            message.guild.members.cache.get(valor.idbot).roles.add(newcargo.id)
            }
            }
        })
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