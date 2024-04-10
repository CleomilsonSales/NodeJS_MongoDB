const mongoose = require('mongoose')

const webStorageSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean,
})

module.exports = mongoose.model('webStorage', webStorageSchema)