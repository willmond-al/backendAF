const {jwtSecret} = require('./secrets')
const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
        const token = req.headers.authorization
        if(!token){
            res.status(401).json('not logged in!')
        }else{
            jwt.verify(token, jwtSecret, (err, decoded)=>{
                if(err){
                    res.status(401).json(err.message)
                }else{
                    req.decodedToken = decoded
                    next()
                }
            })
        }
    }