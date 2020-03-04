const Discord = require('discord.js')
let fs = require('fs');
const { writeFileSync, createWriteStream  } = require('fs');
const request = require('request');

exports.run = async (client, message, args) => {

    let opa = await client.fetchUser("681103541611397236")
    console.log(opa)
}
exports.help = {
  name: 'opa',
  uso: "!opa",
  permissao: "Desenvolvedor",
  descricao: "Usado para Saber Meus Comandos :]"
}