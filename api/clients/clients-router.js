const router = require('express').Router()
const Clients = require('./clients-model')

router.get("/", (req, res)=>{
    Clients.find()
    .then(clients  => {
        res.json(clients)
    })
    .catch(err => res.send(err))
})

module.exports = router