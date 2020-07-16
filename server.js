const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const db = require('./db/connection')
const PORT = process.env.PORT || 3000


const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(logger("dev"));

app.use("/api", postRoutes)
//write postRoutes in when controllers are done

db.on('error', console.error.bind(console, `MongoDB connection error`))

app.listen(PORT, () => `Now listening to server on ${PORT}`)