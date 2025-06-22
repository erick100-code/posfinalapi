import mongoose from "mongoose";

const modelo = new mongoose.Schema({
    nome: String,
    idade: Number,
    salario: Number,
})

export default mongoose.model("format", modelo)