// Importar o pacote express para criar o servidor
const express = require('express')

// Pro express utilizar o JSON
const app = express()

app.use(express.json())

import userRouter from './routes/userRouter'

app.use('/api/', userRouter)

// Exporta a variável app para qualquer arquivo poder utilizar
export default app