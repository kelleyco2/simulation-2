require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')

const c = require('./controller')

const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected')
})

app.get('/api/houses', c.getHouses)
app.post('/api/houses', c.addHouse)
app.delete('/api/houses/:id', c.deleteHouse)

app.listen(SERVER_PORT, () => {
    console.log('Listening on port', SERVER_PORT)
})