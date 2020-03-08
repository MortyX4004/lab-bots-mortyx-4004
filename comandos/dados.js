const Discord = require ('discord.js')
const {version} = require ('discord.js')
const { MessageEmbed } = require('discord.js');
const si = require('systeminformation');
const cpu = require('pidusage');
exports.run = async (client, message, args) => {
cpu(process.pid, async (err, stats) => {      
let data = await si.cpu()
const embed = new MessageEmbed()
.setTitle("Informaçoes da Maquina")
.setDescription(`**Plataforma:** ${data.manufacturer}
**Maquina:** ${data.brand}
**Cores:** ${data.cores}
**Frequencia:** ${data.speedmax}
**Socket:** ${data.socket}
**Memoria em Uso:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
**Uso CPU:** ${Math.round(stats.cpu)}%
**Node.js:** ${process.version}
**Discord JS:** v${version}
`)
message.channel.send(embed)
})
}
exports.help = {
    name: 'dados',
    uso: "ban < Membro >",
    permissao: "Desenvolvedor",
    descricao: ""
  }