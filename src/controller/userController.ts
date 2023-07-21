import { Request, Response } from 'express' // npm i --save-dev @types/express

// Importar banco de dados de extensão .json
const data: string = './database.json'

// Importar o pacote File System para manipular arquivos
const fs = require('fs')

// Listar usuários // get, post, put e delete = método
async function listUsers(req: Request, res: Response) {
    const jsonData = fs.readFileSync(data)
    // Analisa string JSON e transforma em um objeto JavaScript
    res.send(JSON.parse(jsonData))
}

// Cadastrar usuário
async function registerUser(req: Request, res: Response) {
    // Atribui a base de dados em nova variável
    const jsonDataBase = fs.readFileSync(data)

    // Analisa string JSON e transforma em um objeto JavaScript
    let content = JSON.parse(jsonDataBase)

    // Verifica a quantidade de objetos na base de dados
    let index: number = Object.keys(content).length

    // Criar uma nova chave de objeto somando +1 do total de objetos
    content[index++] = req.body

    // Analisa um objeto em JavaScript e transforma em uma string JSON
    const values = JSON.stringify(content)

    // Lê o arquivo da base de dados e adiciona o novo objeto
    fs.writeFileSync(data, values)

    // Retorno amigável para o usuário que chamou o endpoint
    res.status(201).send('User ' + req.body.username + ' registered with sucessfully! ')
}

// Editar usuário
async function editUser(req: Request, res: Response) {
    // Atribui a base de dados em nova variável
    const jsonDataBase = fs.readFileSync(data)

    // Recupera o id enviado por parametro
    const userId = req.params.id

    // Analisa string JSON e transforma em um objeto JavaScript
    let content = JSON.parse(jsonDataBase)

    // Atribui os dados da requisição ao usuário existente na base de dados
    content[userId] = req.body

    // Analisa um objeto em JavaScript e transforma em uma string JSON
    const values = JSON.stringify(content)

    // Lê o arquivo da base de dados e modifica os objetos
    fs.writeFileSync(data, values)

    // Retorno amigável para o usuário que chamou o endpoint
    res.send(`User whit id ${userId} has been updated. `)
}

// Deletar usuário
async function deleteUser(req: Request, res: Response) {
    // Atribui a base de dados em nova variável
    const jsonDataBase = fs.readFileSync(data)

    // Recupera o id enviado por parâmetro
    const userId = req.params.id
    
    // Analisa string JSON e transforma em um objeto JavaScript
    let content = JSON.parse(jsonDataBase)

    // Delete
    delete content[userId]

    // Analisa um objeto em JavaScript e transforma em uma string JSON
    const values = JSON.stringify(content)

    // Lê o arquivo da base de dados e deleta o objeto
    fs.writeFileSync(data, values)

    // Retorno amigável para o usuário que chamou o endpoint
    res.send(`User with id ${userId} has been deleted `)
}

export default { listUsers, registerUser, editUser, deleteUser }