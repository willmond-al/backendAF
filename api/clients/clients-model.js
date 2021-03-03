const db = require('../data/db-config')

module.exports = {
find,
findBy,
findById,
add,
remove
}

function find(){
    return db("clients")
}

function findBy(filter) {
    return db("clients as cl")
    .select("cl.id", "cl.username", "cl.password")
    .where(filter).orderBy("id");
}

function findById(id){
    return db("clients")
    .select("clients.username", "clients.password")
    .where("clients.id", id)
    .first()
}

async function add(cl){
    const [id] = await db("clients").insert(cl, "id")
    return findById(id)   
}
// function add(clientData){
//     return db("clients")
//     .insert(clientData)
// }
function remove(id){
    return db("clients")
    .where({id})
    .del()
}