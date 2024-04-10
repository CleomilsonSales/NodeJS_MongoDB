const mongoose = require('mongoose')
const linkDb = require('./linkDb') //pra não mandar o link para o github

const connectMongoDB = mongoose.connect(linkDb)

module.exports = connectMongoDB