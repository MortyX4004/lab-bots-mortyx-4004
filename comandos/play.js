const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args,Database) => {
    //let guild = message.guild
  //  if(!message.member.voiceChannel) return message.reply("Voce está em nenhum canal de Voz")
  //  if(message.guild.me.voiceChannel) return message.reply("Já estou tocando em um Canal")
    //if(!args[0]) return message.reply("Utilize: !play < Musica >")
    //message.member.voiceChannel.join().then(connection => {
        // You can play a file or a stream here:
     //   const dispatcher = connection.play('/home/hydrabolt/audio.mp3');
   //   });
  //  conexao.play("https://www.youtube.com/watch?v=PfJ9p8YIKy4", { type: 'opus' })
}
exports.help = {
  name: 'play',
  uso: "!play",
  permissao: "Desenvolvedor",
  descricao: "Usado para Saber Meus Comandos :]"
}