const Discord = require('discord.js')
const { inspect } = require('util');
const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const { createWriteStream } = require('fs');
const data = new Date();
const moment = require("moment")
const agora = moment();
let texto = ["665200472596152341","586164335592865792","336905723621670914","505878433998569472"]

  exports.run = async (client, message, args , Database) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return;  
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      const embed = new MessageEmbed()        
      .addField(`📥 Input:`, `\`\`\`cs\n${args.join(' ')}\`\`\``)      
      .addField(`📤 Output:`, `\`\`\`cs\n${inspect(evaled)}\`\`\``) 
      .setColor('#00FFFF')
      .setFooter(message.author.tag, message.author.avatarURL).setTimestamp()             
      message.channel.send(embed);
    }
    catch (error) {
        const embed1 = new MessageEmbed()       
        .setColor("RED")
        .setDescription(error)
        message.channel.send(embed1).then(msg => msg.delete(5 * 1000))
      }        
  };
exports.help = {
  name: 'eval',
  uso: "eval < code >",
  permissao: "Desenvolvedor",
  descricao: "Usado para Executar Codigos"
}