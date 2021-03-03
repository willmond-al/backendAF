const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()
const {jwtSecret} = require('./secrets')
const mw = require('../middleware/middlewares')

const Clients = require('../clients/clients-model')
const Instructors = require('../instructors/instructors-model')

router.post('/register/client', mw.checkCredentials, mw.checkClientNameExists, async(req, res)=>{
    try{
        const hash = bcryptjs.hashSync(req.body.password)
        const newClient = await Clients.add({username: req.body.username, password: hash})
        res.status(201).json(newClient)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})

router.post('/register/instructor', mw.checkCredentials, mw.checkInstructorCode, mw.checkInstNameExists, async(req, res)=>{
    try{
        const hash = bcryptjs.hashSync(req.body.password)
        const newInst = await Instructors.add({username: req.body.username, password: hash})
        res.status(201).json(newInst)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})

router.post('/login/client', mw.checkCredentials, (req, res)=>{
    const {username, password} =req.body
    Clients.findBy({username: username})
    .then(([client])=>{
        if(client && bcryptjs.compareSync(password, client.password)){
            const token = makeToken(client) 
            res.status(200).json({
                message: `welcome back ${client.username}`,
                token: token
            })
        }else{
            res.status(401).json('invalid credentials')
        }
    })
})

router.post('/login/instructor', mw.checkCredentials, (req, res)=>{
    const {username, password} =req.body
    Clients.findBy({username: username})
    .then(([client])=>{
        if(client && bcryptjs.compareSync(password, client.password)){
            const token = makeToken(client) 
            res.status(200).json({
                message: `welcome back ${client.username}`,
                token: token
            })
        }else{
            res.status(401).json('invalid credentials')
        }
    })
})

function makeToken(user){
    const payload = {
      subject:user.id,
      username:user.username
    }
    const options = {
      expiresIn: "1000s"
    }
    return jwt.sign(payload, jwtSecret, options)
  }
  

module.exports = router