import express from "express"// importa o express
import mongoose from "mongoose"
import dotenv from "dotenv"
import format from "./format.js"

dotenv.config()

const API = express()// variavel api recebe a função do express
const PORT = 3000// aqui é a porta que iremos rodar

API.use(express.json())// transforma todas as requisições em um json

const conectarmongoDB = async () => {
    try {
        await mongoose.connect(process.env.URL)
        console.log('conectado ao mongoDB')
    } catch (error) {
        console.log(`erro ao conectar com o mongoDB error[${error}]`)
    }
}

conectarmongoDB()

API.get("/", (req, res) => {
    res.send('sim aqui a api esta funcionando')
})

// CREATE = criar dados

API.post("/humanos", async (req, res) => {
    try {
        const criar = await format.create(req.body)
        res.json(criar)
    } catch (error) {
        res.json({error: error})
    }
})

// RED = ler dados

API.get('/humanos', async (req, res) => {
    try {
        const lerdata = await format.find()
        res.json(lerdata)
    } catch (error) {
        res.json({error: error})
    }
})

// UPDATE = atualizar dados

API.put('/humanos/:id', async (req, res) => {
    try {
        const atualizar = await format.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
    
        res.json(atualizar)
    } catch (error) {
        res.json({ error: error })
    }
})

//FINAL DELETE = deletar dados

API.delete('/humanos/:id', async (req, res) => {
    try {
        const deletar = await format.findByIdAndDelete(req.params.id)
        res.json(deletar)
    } catch (error) {
        res.json({ error: error })
    }
})

API.listen(PORT, () => {// quando estiver escutando a PORT quando a PORT der certo o codigo do callback assincrono sera executado abaixo
    console.log(`a api agora esta funcionando na porta ${PORT}`)
})