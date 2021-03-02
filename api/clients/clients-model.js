const db = require('../data/db-config')

module.exports = {
find,
findById,
add
}

function find(){
    return db("clients")
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