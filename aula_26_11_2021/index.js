const fs = require('fs');
const Path = require('path');

// const dir = fs.promises.readdir(__dirname)
// dir.then(arquivos => arquivos
//     .map(arquivo => Path.join(__dirname, arquivo)))
//     .then(console.log)



fs.readFile(
    'teste.json',
    'utf-8',
    (err, data) => {
        const usuario = JSON.parse(data)
        console.log(usuario.nome)
    }
)

const arquivo = 'teste2.json'
const usuario2 = {
    nome: 'erich'
}

fs.promises.writeFile(arquivo, JSON.stringify(usuario2), 'utf-8')
.then(() => console.log('arquivo criado com sucesso'))



