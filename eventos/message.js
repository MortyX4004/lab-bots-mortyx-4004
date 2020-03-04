const Database = require("../Data/database.js")

module.exports = async (client, message) => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return client.channels.get("681798419907739674").send(` ${message.author.username} Falou pro Bot: ${message.content}`);       
  Database.Membros.findOne({membroid: message.author.id}, function(erro, dados) {   
  if(dados)
  {
  if(message.author.id == "665200472596152341"){
 // dados.xp += 1;
  //console.log(dados.xp)
  if(dados.xp >= 5)
  {
  dados.level += 1;
  //message.reply(`Novo Level Porra: ${dados.level + 1}`)
  dados.xp = 0;
  }
  dados.save()
  }
  }
  })
  if(message.channel.id == "681154907818164263")
  {
  let texto = message.content;
  if(texto.indexOf("<") > -1)
  {}else{    
  await message.react("✖️");await message.react("✔️")                
    new Database.Sugestao({
      indice: message.author.id,
      nome: message.author.username,      
      sugestao: message.content
      }).save()  
  }
  }
  if(message.channel.id != "681503728792371233")
  {
  if(message.author.id != "681103541611397236")
  {
  if(message.author.bot) return message.delete();
  }
  }
  let prefixo = "!"; //Prefixo do BOT
  if(!message.content.startsWith(prefixo)) return ;       
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase(); //Comando
  let args = messageArray.slice(1); //Argumentos
  let arquivocmd = client.commands.get(command.slice(prefixo.length));
  let arra = ["586164335592865792","665200472596152341","336905723621670914"]
  if(arra.indexOf(message.author.id) < 0)
  {
  if(message.channel.id == "682386314821369871")
  {
  if(arquivocmd) {
    if(arquivocmd) {
      Database.Membros.findOne({membroid: message.author.id}, async function(erro, dados) {   
      if(dados){
      if(dados.cooldown >= 3) return message.reply("Aguarde 3 Segundos para usar um Comando Novamente")
      arquivocmd.run(client, message, args, Database);
      dados.cooldown = 3;
      dados.save();
      setTimeout(() =>{
      dados.cooldown = 0;
      dados.save();    
      },3000)
      }
      }
      )
      } 
  }
  }
  else
  {
  const canal = client.channels.get('682386314821369871')
  if(arquivocmd) return message.channel.send(`Você precisa está no ${canal} para poder executar os comandos do bot.`)
  .then(msg => msg.delete( 5 * 1000))
  }
  }
  else{
  if(arquivocmd) {
  arquivocmd.run(client, message, args, Database);
  }
}
}