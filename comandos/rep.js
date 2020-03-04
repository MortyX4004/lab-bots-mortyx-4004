const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args , Database) => {
if(!args[0]) return message.reply("Mencione um Membro")
let membro = message.mentions.members.first()
if(membro.id == message.author.id) return message.reply("Quer Reputar voce mesmo?")
Database.Membros.findOne({membroid: membro.id}, function(erro, dados) {   
if(dados){
Database.Membros.findOne({membroid: message.author.id}, function(erro, valor) {   
if(valor){      
let array = valor.reputou;
if(array.indexOf(membro.id) > -1)
{message.reply("Voce ja reputou esse Membro")}else{
valor.reputou.push(membro.id) 
valor.save()  
dados.rep += 1;
dados.save()
message.channel.send(`Agora o Membro ${membro} Possui ${dados.rep} Reputações`)
}
}
})
}else{
    new Database.Membros({
        membroid: membro.id,
        xp: 0,
        level: 0,
        rep: 1
        }).save() 
        message.channel.send(`Agora o Membro ${membro} Possui 1 Reputações`)         
}
})
}
exports.help = {
  name: 'rep',
  uso: "!rep",
  permissao: "Usuario",
  descricao: "Usado para Reputar um Membro! :]"
}