import express from "express"// importa o expres

const API = express()// variavel api recebe a função do express
const PORT = 3000// aqui é a porta que iremos rodar
const objeto = [
    {nome: 'erick eduardo souza aruajo', idade: '18', salario: '42,500'},
    {nome: 'amigo da vizinhança homem aranha', idade: '18', salario: '42,500'},
    {nome: 'super xandão o ultimo heroi da terra BASED', idade: '18', salario: '42,500'},
    {nome: 'teste de nome esse aqui é nome do nosso amigo format JSON', idade: '18', salario: '42,500'},
    {nome: 'javascript oject notation', idade: '18', salario: '42,500'}
]

API.listen(PORT, () => {// quando estiver escutando a PORT quando a PORT der certo o codigo do callback assincrono sera executado abaixo
    console.log(`a api agora esta funcionando na porta ${PORT}`)
})

API.get("/", (req, res) => {
    res.send('aqui esta sua response (receba)')
})

API.get("/fim", (req, res) => {
    res.json(objeto)
})