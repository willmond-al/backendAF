const router = require('express').Router()
const Clients = require('./clients-model')

router.get("/", (req, res)=>{
    Clients.find()
    .then(clients  => {
        res.json(clients)
    })
    .catch(err => res.send(err))
})

router.post("/", (req, res)=>{
    const clientData = req.body
    Clients.add(clientData)
    .then(cl => {
        res.status(201).json(cl)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'could not make client account'})
    })
})

router.delete('/:id', (req, res)=>{
    Clients.remove(req.params.id)
    .then(client => {
        res.status(200).json({message: "client removed"})
    })
    .catch(err => {
        res.status(500).json({message: "could not remove client"})
    })
})

module.exports = router