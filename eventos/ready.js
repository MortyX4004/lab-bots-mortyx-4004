module.exports = async (client) => {
console.log("Estou Online");
client.user.setActivity(`Estou Online! Duvida? use: !Ajuda`, { type: "PLAYING" });      
let cores = [
    "2E64FE","FF0000","00FF00","FF8000","FF0040","000000",
    "FFFFFF","FFFF00","4B0082","00FFFF","424242",
]
setInterval(async function(){
let ok =  cores[Math.floor(Math.random() * Math.floor(cores.length))];
client.guilds.cache.get("680888911668707480").roles.cache.get("682192809209626664").setColor(ok)
},120000)  

setInterval(() =>{
//client.channels.cache.get("683788554673061920").setName(`Bots: ${client.guilds.cache.members.cache.filter(x => x.user.bot).size}/30`)
//client.channels.cache.get("683795887306047541").setName(`Usuarios: ${client.guilds.cache.members.cache.filter(x => !x.user.bot).size}`)
},99999999)
}
