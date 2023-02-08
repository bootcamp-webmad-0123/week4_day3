const mongoose = require('mongoose')

// dog schema
const dogSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
    adopted: Boolean
})

// dog model
const Dog = mongoose.model('dog', dogSchema)

module.exports = Dog