// ddbb connection
const mongoose = require('mongoose')

const databaseName = 'Dogs-0123'
const connectionString = `mongodb://localhost/${databaseName}`

mongoose
    .set('strictQuery', true)
    .connect(connectionString)
    .then(connectionInfo => console.log(`Connected to Mongo! Database name: "${connectionInfo.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))