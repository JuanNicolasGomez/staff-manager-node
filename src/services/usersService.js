const config = require('../config.json');
const jwt = require('jsonwebtoken');
let users = require('../dataMock/users_mock');
const role = require('../helpers/role');

module.exports = {
    authenticate,
    getAll,
    getById,
    updateUserById
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret, {expiresIn: '1h'});
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function getById(id) {
    const user = users.find(u => u.id === parseInt(id));
    if (!user) return;
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

async function updateUserById(id, newUser) {
    users = users.map(user => {
        if (user.id === parseInt(id) && user.role !== role.Superuser){
            return newUser;
        } else {
            return user;
        }
    });
    if (!users) return;
    const { password, ...userWithoutPassword } = users;
    return userWithoutPassword;
}