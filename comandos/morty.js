const Discord = require('discord.js')

exports.run = async (client, message, args,Database) => {
let y = await client.fetchApplication().then(x =>{
  console.log(x)

})
}
exports.help = {
  name: 'morty',
  uso: "!morty",
  permissao: "Desenvolvedor",
  descricao: "Usado para Saber Meus Comandos :]"
}