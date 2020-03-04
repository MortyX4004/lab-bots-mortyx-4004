const Discord = require('discord.js')

exports.run = async (client, message, args , Database) => { 
message.channel.send(`Obtendo Resultados`).then(msg =>{
setTimeout(()=>{msg.edit("Processando Resultado")},4000)
let id=[],rep=[],cont=0;let y=[]
client.users.map(x =>{
Database.Membros.findOne({membroid: x.id}, function(erro, dados) {   
if(dados){
id.push(x.id)
rep.push(dados.rep)
cont++;
y.push({"nome": client.users.get(dados.membroid).username,"rep":dados.rep})
}
})
})
setTimeout(() =>{
y.sort((b, a) => a.rep - b.rep);
let embed = new Discord.RichEmbed()
.setTitle("Rank Reputações")
.setColor("RED")
.setTimestamp()
if(cont >= 10){   
    for(var i= 0;i <= 10;i++)
    {    
        if(i == 0){
            embed.addField(`🥇 TOP 1`, `${y[i].nome} ( **${y[i].rep}** )`) 
            i++;
            }
            if(i == 1){
            embed.addField(`🥈 TOP 2 `,`${y[i].nome} ( **${y[i].rep}** )`) 
            i++;
            }    
            if(i == 2){
            embed.addField(`🥉 TOP 3 `,`${y[i].nome} ( **${y[i].rep}** )`) 
            i++;
            }                 
            if(y[i])
            { 
            if(i == 3){embed.addField(`🏅 TOP 4 `, `${y[i].nome} ( **${y[i].rep}** )`) ;}
            if(i == 4){embed.addField(`🏅 TOP 5 `, `${y[i].nome} ( **${y[i].rep}** )`) ;}     
            if(i == 5){embed.addField(`🏅 TOP 6 `, `${y[i].nome} ( **${y[i].rep}** )`) ;}     
            if(i == 6){embed.addField(`🏅 TOP 7 `, `${y[i].nome} ( **${y[i].rep}** )`) ;}     
            if(i == 7){embed.addField(`🏅 TOP 8 `, `${y[i].nome} ( **${y[i].rep}** )`) ;}     
            if(i == 8){embed.addField(`🏅 TOP 9 `, `${y[i].nome} ( **${y[i].rep}** )`) ;}     
            if(i == 9){embed.addField(`🏅 TOP 10`, `${y[i].nome} ( **${y[i].rep}** )`) ;}          
            i++;
            }        
    }
    msg.edit(embed)
}
},6000)
})
}
exports.help = {
  name: 'rankrep',
  uso: "!rankrep",
  permissao: "Usuario",
  descricao: "Usado para ver o Rank de Reputações"
}
