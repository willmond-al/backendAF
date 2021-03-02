const db = require('../data/db-config')

module.exports = {
find,
findById,
add,
remove
}

function find(){
    return db("instructors")
}

function findById(id){
    return db("instructors as i")
    .select("i.username", "i.password")
    .where("i.id", id)
    .first()
}

async function add(inst){
    const [id] = await db("instructors").insert(inst, "id")
    return findById(id)   
}

function remove(id){
    return db("instructors")
    .where({id})
    .del()
}