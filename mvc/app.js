const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// DDBB
require('./db/db-connection')

// Model
const Dog = require('./models/dog.model')

app.get('/', (req, res) => {
    res.render('index-page')
})

app.get('/perros', (req, res) => {

    Dog
        .find()
        .then(allDogsFromDB => {
            res.render('dogs-page', { dogs: allDogsFromDB })
        })
        .catch(err => console.log(err))
})

app.listen(5005, () => console.log('APP LISTENING'))