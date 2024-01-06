const mongoose = require('mongoose')
require('dotenv').config()

const dataURL = process.env.DATA_URL

await mongoose.connect(dataURL)
const main = async () => {
    try {
        console.log('DB conectado com sucesso');
    } catch (error) {
        console.log('Error ao conectar');
    }
}

module.exports = main