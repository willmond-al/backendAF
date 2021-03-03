const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const clientsRouter = require('./clients/clients-router')
const instRouter = require('./instructors/instructors-router')
const classesRouter = require('./classes/classes-router')
const authRouter = require('./auth/auth-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/api/clients', clientsRouter)
server.use('/api/instructors', instRouter)
server.use('/api/classes', classesRouter)
server.use('/', authRouter)

// server.get("/", (req, res)=>{
//     res.json({api: "up"})
// })
module.exports = server
