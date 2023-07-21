import app from "../app"

// Importar o pacote express para criar o servidor
const express = require('express')

import userController from "../controller/userController"

const router = express.Router() // .Router() = instância (pesquisar depois)

// ================================================================

// Listar usuários // get, post, put e delete = método
router.get('/users', userController.listUsers)

// Cadastrar usuário
router.post('/users', userController.registerUser)

// Editar usuário
router.put('/user/:id', userController.editUser)

// Deletar usuário
router.delete('/user/:id', userController.deleteUser)

export default router