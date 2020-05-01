const express = new require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())

const defaultPort = 8080
const port = process.env.PORT || defaultPort

const profanityRouter = require('./routers/profanity')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(profanityRouter)
app.listen(port)
