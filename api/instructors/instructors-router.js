const router = require('express').Router()
const Instructors = require('./instructors-model')

router.get("/", (req, res)=>{
    Instructors.find()
    .then(instructors  => {
        res.json(instructors)
    })
    .catch(err => res.send(err))
})

router.post("/", (req, res)=>{
    const instData = req.body
    Instructors.add(instData)
    .then(inst => {
        res.status(201).json(inst)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message:'could not make instructor account'})
    })
})

module.exports = router