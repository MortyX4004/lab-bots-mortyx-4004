const Discord = require('discord.js')
let user;
exports.run = async (client, message, args) => {
/*
user = message.author;
let canal = message.guild.createChannel(`${message.author.username}`, { type: 'text' }).then(x =>{
x.overwritePermissions(message.guild.roles.find(x => x.name == '@everyone'), {
'VIEW_CHANNEL': false     
})
let local = x.setParent("681629681845272751");
let permissao = x.overwritePermissions(message.author.id, {
      'VIEW_CHANNEL': true,
      'SEND_MESSAGES': true
})
x.overwritePermissions("681103541611397236", {
    'VIEW_CHANNEL': true,
    'SEND_MESSAGES': true
})
x.send(`${message.author} Digite o ID Do seu Bot!`).then( async msg1 => {
    let c1 = x.createMessageCollector(par => par.author.id == message.author.id, { time: 60000 * 20,max:1})
    .on('collect', async c => {      
        idbot = c.content
        let fetch = await client.fetchUser(idbot)  
            x.send('Qual o Prefixo do seu Bot?').then(async msg2 => {
                let c2 = x.createMessageCollector(xx => xx.author.id == message.author.id, { time: 60000 * 20,max:1})
                .on('collect', c => {
                    prefixo = c.content

                    x.send('Qual a Linguagem do seu Bot?').then(async msg3 => {
                        let c3 = x.createMessageCollector(xx => xx.author.id == message.author.id, { time: 60000 * 20,max:1})
                        .on('collect', c => {
                            linguagem = c.content
                            x.send('Bot Enviado para Avaliaçao!')
                          //  console.log(`Prefixo: ${prefixo} Linguagem: ${linguagem} ID: ${idbot}`)
                            setTimeout(function(){ x.delete() }, 6000);
                            let link = 'https://discordapp.com/oauth2/authorize?&client_id=${idbot}&scope=bot'
                            message.guild.channels.get("681636090519748911").send(`${user}`)                                                                                                                                            
                            let embed = `» ${user} Enviou o Bot` + `${fetch.username} Para Avaliaçao.`                    
                            message.guild.channels.get("681636090519748911").send(embed)                            
                            //staff
                            let staff = new Discord.RichEmbed()
                            .setTitle("Autorizaçâo de Bot")
                            .setThumbnail(fetch.displayAvatarURL)
                            .setDescription(`ID: ${idbot}
                            Nome: ${fetch.username}
                            Prefixo: ${prefixo}
                            Linguagem: ${linguagem}
                            Convite: ${link}`)
                            .setColor("RED")                            
                            message.guild.channels.get("681519446040641563").send(staff)
                            })
                        })
                    })
                })            
        })
    })
})
*/
message.reply("Comando desativado")
}
exports.help = {
  name: 'adicionar',
  uso: "Adicionar",
  permissao: "Desenvolvedor",
  descricao: "Usado para Adicionar bots no Code Lab"
}
