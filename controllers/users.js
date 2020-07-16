const User = require('../models/users')
const db = require('../db/connection')

db.on('error', console.error.bind(console, `MongoDB connection error:`))

//CRUD functions need to be written 
// be sure to module export 