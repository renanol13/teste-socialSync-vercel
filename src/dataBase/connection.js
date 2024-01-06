const mongoose = require('mongoose')
require('dotenv').config()

const dataURL = process.env.DATA_URL

await mongoose.connect(dataURL)


module.exports = main