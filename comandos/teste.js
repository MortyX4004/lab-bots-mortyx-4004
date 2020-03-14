const Discord = require('discord.js')
const yts = require( 'yt-search' )
const ytdl = require('ytdl-core')
const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
/*
    const params = args.join(' ')
    if(!params) return message.reply("Você n digitou um vídeo valido!")
   // if(!message.member.channel.voice) return message.reply('entre em um canal de voz!')
  
  yts(params, async  ( err, r ) => {
      if ( err ) throw err                
        const embed = new MessageEmbed()
        message.channel.send()
        const videos = r.videos
        const pVideo = videos[0];
        if(!pVideo) return message.reply("Não foi possivel encontrar esse vídeo, tente novamente!")        
        const result = videos.map(v => (embed.setDescription(`🎵 » Tocando: **${v.title}**\n⏰ » Tempo: \`\`${v.timestamp}\`\`\nCriador: ${v.author.name}\n Autor: \`\`${message.author.tag}\`\``).setColor('RANDOM')))
        
        const connection = await message.member.voice.channel.join()
        //let dispatcher = await connection.playStream(ytdl(pVideo.url, {filter: 'audioonly'}))
        message.channel.send(result[0])
    })
    */
  }
exports.help = {
  name: 'teste',
  uso: "!teste",
  permissao: "Desenvolvedor",
  descricao: "Usado para Saber Meus Comandos :]"
}