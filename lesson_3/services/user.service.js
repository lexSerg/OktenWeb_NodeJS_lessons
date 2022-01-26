const users = require('../data/users');

const getUsers = () => users;
const insertUser = (user) => {
    users.push(user)
};
const getUserbyId = (id) => {
    if (id < 0) throw Error('User id must greater then 0');
    if (!users[id]) throw Error('User is not exist');
    users[id];
}
module.exports = {
    getUsers,
    insertUser,
    getUserbyId
}