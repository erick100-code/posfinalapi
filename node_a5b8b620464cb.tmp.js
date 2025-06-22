import express from "express"// importa o express
import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const API = express()// variavel api recebe a função do express
const PORT = 3000// aqui é a porta que iremos rodar

const conectarmongoDB = async () => {
    try {
        await mongoose.connect(process.env.URL)
        console.log('conectado ao mongoDB')
    } catch (error) {
        console.log(`erro ao conectar com o mongoDB error[${error}]`)
    }
}

API.listen(PORT, () => {// quando estiver escutando a PORT quando a PORT der certo o codigo do callback assincrono sera executado abaixo
    console.log(`a api agora esta funcionando na porta ${PORT}`)
})