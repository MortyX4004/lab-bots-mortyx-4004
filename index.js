const Discord = require("discord.js");
const client = new Discord.Client();
const { readdirSync } = require('fs')
const fs = require("fs");
const Database = require("./Data/database.js")
const moment = require("moment")
const agora = moment();
const config = require("./configs/config.json")
client.commands = new Discord.Collection();
const evtFiles = readdirSync('./eventos/')
const si = require('systeminformation');
console.log('log', `Carregando o total de ${evtFiles.length} eventos`)
evtFiles.forEach(f => {
const eventName = f.split('.')[0]
const event = require(`./eventos/${f}`)  
client.on(eventName, event.bind(null, client))
})  
//Carregamento dos Comandos
fs.readdir("./comandos/", (err, files) => {
    if (err) console.error(err);
    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f, i) => {
      let props = require(`./comandos/${f}`);
      console.log(`Comando ${f} Carregado`);
      client.commands.set(props.help.name,
         props);
    });
  });  
client.login(config.bot2)
/*
let dia = agora.date();
setInterval(()=>{
client.guilds.get("680888911668707480").members.cache.map( x =>{
if(x.user.bot)
{
Database.Bots.findOne({idbot: x.user.id}, async function(erro, dados) {   
if(dados){
if(dados.dia >= 1){
let result = dia - dados.dia
if(result == 3){
//console.log(`O Bot ${dados.nome} Está off a 3 dias`)
}
}
}
})
}
})
},240000)
setInterval(() =>{
client.guilds.get("680888911668707480").members.cache.map( a =>{
if(a.user.bot)
if(a.presence.status == "offline"){
Database.Bots.findOne({idbot: a.user.id}, function(erro, dados) {   
if(dados){
dados.dia += 1;
dados.save();
}
})
}
})
},86400000)
*/