const Clients = require('../clients/clients-model')
const Instructors = require('../instructors/instructors-model')
const Classes = require('../classes/classes-model')

const checkClientId = async(req, res, next)=>{
    const {id} = req.params
    try{
        const client = await Clients.findById(id)
        if(!client){
            res.status(400).json({
                message: `no client with id ${id}`
            })
        }else{
            req.client = client
            next()
        }
    }catch(e){
        res.status(500).json(`server error: ${e}`)
    }
}
const checkInstId = async(req, res, next)=>{
    const {id} = req.params
    try{
        const instructor = await Instructors.findById(id)
        if(!instructor){
            res.status(400).json({
                message: `no instructor with id ${id}`
            })
        }else{
            req.instructor = instructor
            next()
        }
    }catch(e){
        res.status(500).json(`server error: ${e}`)
    }
}
const checkClassId = async(req, res, next)=>{
    const {id} = req.params
    try{
        const cl = await Classes.findById(id)
        if(!cl){
            res.status(400).json({
                message: `no class with id ${id}`
            })
        }else{
            req.cl = cl
            next()
        }
    }catch(e){
        res.status(500).json(`server error: ${e}`)
    }
}

const checkCredentials = (req, res, next) => {
    const {username, password} = req.body
    if(!username || !password){
        res.status(400).json('username and password required')
    }else{
        next()
    }
}

const checkInstructorCode = (req, res, next) => {
    const {instructorcode} = req.body
    if(instructorcode  != "gymjunkie"){
        res.status(400).json('instructor code incorrect!')
    }else{
        next()
    }
}

const checkClientNameExists = async (req, res, next) => {
    try{
        const rows = await Clients.findBy({username: req.body.username})
        if(!rows.length){
            next()
        }else{
            res.status(401).json('username taken')
        }
    }catch(e){
        res.status(500).json(`server error: ${e}`)
    }
}
const checkInstNameExists = async (req, res, next) => {
    try{
        const rows = await Instructors.findBy({username: req.body.username})
        if(!rows.length){
            next()
        }else{
            res.status(401).json('username taken')
        }
    }catch(e){
        res.status(500).json(`server error: ${e}`)
    }
}

const checkClassInfo = (req, res, next) => {
    const {name, time, duration, location} = req.body
    if(!name){
        res.status(400).json('class name required')
    } else if(!time){
        res.status(400).json('class time required')
    } else if(!duration){
        res.status(400).json('class duration required')
    } else if(!location){
        res.status(400).json('class location required')
    }else{
        next()
    }
}

module.exports = {
    checkClientId,
    checkInstId,
    checkClassId,
    checkCredentials,
    checkClassInfo,
    checkInstructorCode,
    checkClientNameExists,
    checkInstNameExists
}

