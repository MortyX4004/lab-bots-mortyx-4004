const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

let cores = [
    {"nome": "azul","codigo":"#2E64FE","cargo": "Azul"},
    {"nome":"vermelho","codigo":"#FF0000","cargo":"Vermelho"},
    {"nome":"verde","codigo":"#00FF00","cargo":"Verde"},
    {"nome":"laranja","codigo":"#FF8000","cargo":"Laranja"},
    {"nome":"rosa","codigo":"#FF0040","cargo":"Rosa"},
    {"nome":"preto","codigo":"#000000","cargo":"Preto"},
    {"nome":"branco","codigo":"#FFFFFF","cargo":"Branco"},
    {"nome":"amarelo","codigo":"#FFFF00","cargo":"Amarelo"},
    {"nome":"roxo","codigo":"#4B0082","cargo":"Roxo"},
    {"nome":"ciano","codigo":"#00FFFF","cargo":"Ciano"},
    {"nome":"cinza","codigo":"#424242","cargo":"Cinza"},    
]
exports.run = async (client, message, args) => {
let array = [],cox=[]
if(args[0] === "random"){
    setTimeout(()=>{
      let random = Math.floor(Math.random() * cores.length);
      let rand =  cores[random];  

      let rol = message.guild.roles.cache.map(async m => {
      if(m.name.toLowerCase() == rand.nome){   
      await message.member.roles.add(m.id)      
      message.reply(`Sua cor foi Atualizada para ${m}`)
      }
      })
      },1000)  
}    
if(!args[0]) 
{
const color = new MessageEmbed()
color.setTitle("Cores Disponiveis")
cores.map(async x =>{
array.push(x.nome)
})
color.setDescription(`${array}`)
message.reply(color)
}else{
cores.map(async x =>{
message.member.roles.cache.some(role => {
if(role.name == x.cargo)
{
message.member.roles.remove(role) 
}
})
setTimeout(async function(){
if(args[0].toLowerCase() == x.nome) {
  
let rol = message.guild.roles.cache.map(async m => {
  if(m.name == x.cargo){
    message.member.roles.add(m.id)
    message.reply(`Cor setada com Sucesso!`)
    }
})
let arg = args[0].toLowerCase();
if(message.guild.roles.cache.map(b => b.name == arg)) return;
message.guild.createRole({name: x.cargo,color: x.codigo}).then(async car =>{
await message.member.roles.add(car.id)
message.reply(`Cor setada com Sucesso!`)
})
}
},1000)
})
}
}
exports.help = {
  name: 'cor',
  uso: "cor < cor >",
  permissao: "Usuario",
  descricao: "Adiciona uma Cor a Você"
}

