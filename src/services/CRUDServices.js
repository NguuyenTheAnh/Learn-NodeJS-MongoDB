const db = require('../config/database');

const getAllUsers = async () => {
    const { rows } = await db.query(
        `select * from users
        order by id`
    );
    return rows;
}

const getUserById = async (userId) => {
    const { rows } = await db.query(
        `select * from users
        where id = $1;`,
        [userId]
    );
    return rows[0];
}

const updateUser = async (email, name, city, userId) => {
    const { rows } = await db.query(
        `update users
         set email = $1, name = $2, city = $3
         where id = $4`,
        [email, name, city, userId]
    );
}

const deleteUser = async (userId) => {
    const { rows } = await db.query(
        `delete from users
    where id = $1`,
        [userId]
    );
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}