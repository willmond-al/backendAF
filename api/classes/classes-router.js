const router = require('express').Router()
const Classes = require('./classes-model')

router.get("/", (req, res)=>{
    Classes.find()
    .then(classes  => {
        res.json(classes)
    })
    .catch(err => res.send(err))
})

module.exports = router