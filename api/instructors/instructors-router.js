const router = require('express').Router()
const Instructors = require('./instructors-model')
const mw = require('../middleware/middlewares')

router.get("/", (req, res)=>{
    Instructors.find()
    .then(instructors  => {
        res.json(instructors)
    })
    .catch(err => res.send(err))
})

router.post("/", mw.checkCredentials, mw.checkInstructorCode, (req, res)=>{
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

router.delete('/:id', mw.checkInstId, (req, res)=>{
    Instructors.remove(req.params.id)
    .then(inst => {
        res.status(200).json({message: "instructor removed"})
    })
    .catch(err => {
        res.status(500).json({message: "could not remove instructor"})
    })
})

module.exports = router