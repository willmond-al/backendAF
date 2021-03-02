const router = require('express').Router()
const Classes = require('./classes-model')

router.get("/", (req, res)=>{
    Classes.find()
    .then(classes  => {
        res.json(classes)
    })
    .catch(err => res.send(err))
})

router.post("/", (req, res)=>{
    const classData = req.body
    Classes.add(classData)
    .then(cl => {
        res.status(201).json(cl)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'could not add class'})
    })
})

module.exports = router