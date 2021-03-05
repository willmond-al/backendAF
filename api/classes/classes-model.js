const db = require('../data/db-config')
const useParams = require('react-router-dom')

module.exports = {
find,
findById,
add,
remove
}

function find(){
    return db("classes")
}

function findById(id){
    return db("classes as cl")
    .select("cl.id", "cl.name", "cl.time")
    .where("cl.id", id)
    .first()
}

async function add(cl){
    // const {idi} = useParams()
    // cl.instructor = idi
    const [id] = await db("classes").insert(cl, "id")
    return findById(id)
}

function remove(id){
    return db("classes")
    .where({id})
    .del()
}