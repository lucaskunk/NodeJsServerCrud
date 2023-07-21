import dotenv from 'dotenv'
const PORT = process.env.PORT || 3000
import app from './app'
dotenv.config()



// Iniciar servidor
app.listen(PORT, () => console.log(`Rodando com sucesso na porta ${PORT}`))