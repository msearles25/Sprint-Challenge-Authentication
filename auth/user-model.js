const db = require('../database/dbConfig');

module.exports = {
    add,
    findById,
    findBy
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').returning('id').insert(user)

    return findById(id)
}