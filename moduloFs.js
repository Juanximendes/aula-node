
const fs = require('fs')
let caminhoArquivo = './criarArq.js'
let conteudo = 'Ola Mundo'


fs.writeFile( caminhoArquivo, conteudo, (err, dados) => {
	if(err) throw err
	console.log('O arquivo foi salvo com sucesso!')
})

// const fs = require('fs')
// let caminhoArquivo = './arquivo1.js'
// let caminhoArquivo2 = './arquivo2.js'
// let arquivoConcatenado- ""
// let codificacao = 'utf8'

// fs.readFile( {caminhoArquivo, caminhoArquivo2}, codificacao, (err, dados) => {
// 	if (err) throw err
// 	console.log(dados)
// })


