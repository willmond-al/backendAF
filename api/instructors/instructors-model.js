const db = require('../data/db-config')

module.exports = {
find,
findBy,
findById,
add,
remove
}

function find(){
    return db("instructors")
}

function findBy(filter) {
    return db("instructors as i")
    .select("i.id", "i.username", "i.password")
    .where(filter).orderBy("id");
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