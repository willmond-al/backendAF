const router = require('express').Router()
const Classes = require('./classes-model')
const mw = require('../middleware/middlewares')

router.get("/", (req, res)=>{
    Classes.find()
    .then(classes  => {
        res.json(classes)
    })
    .catch(err => res.send(err))
})

router.post("/", mw.checkClassInfo, (req, res)=>{
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

router.delete('/:id', mw.checkClassId, (req, res)=>{
    Classes.remove(req.params.id)
    .then(inst => {
        res.status(200).json({message: "class removed"})
    })
    .catch(err => {
        res.status(500).json({message: "could not remove class"})
    })
})

module.exports = router