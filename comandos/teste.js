const Discord = require('discord.js')
let fs = require('fs');
const { writeFileSync, createWriteStream  } = require('fs');
const request = require('request');

exports.run = async (client, message, args) => {
//writeFileSync("Teste", message.attachments.first());
console.log(message.attachments.first().url)
Baixar(message.attachments.first().url)
  /*
  fs.writeFile("./files/package.json",collected.attachments, function(err){
    if(err){
      return console.log('erro')
    }
    console.log('Arquivo Criado');
  });
});
*/
}
exports.help = {
  name: 'teste',
  uso: "!teste",
  permissao: "Desenvolvedor",
  descricao: "Usado para Saber Meus Comandos :]"
}

function Baixar(url) {
  return new Promise((resolver) => {
   
    const partes = url.split('/');
    const arquivo = createWriteStream(partes[partes.length - 1]);
    request(url).on('response', (resposta) => {

      const stream = resposta.pipe(arquivo);
     // console.log(stream)
      stream.on('finish', resolver);
    });
  });
};