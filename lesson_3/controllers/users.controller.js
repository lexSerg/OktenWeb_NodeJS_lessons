const userServise = require('../services/user.service')
const getUsers =  (req, res) => {
    try{
        const users = userServise.getUsers()
        res.render('users', {users});
    } catch(e) {
        res.status(400).json(e.message)
    }
};
const getUserbyId =  (req, res) => {
    try{
        const { userId } = req.params;
        const user = userServise.getUserbyId(userId);
        res.json(user)
    } catch(e) {
        res.status(400).json(e.message)
    }
};
const createUser =  (req, res) => {
    try{
        userServise.insertUser(req.body);
        res.status(201).json('User created')
    } catch(e) {
        res.status(400).json(e.message)
    }

}
const deleteUser =  (req, res) => {
    try{
        res.json('Users delete');
    } catch(e) {
        res.status(400).json(e.message)
    }
};
module.exports = {
    getUsers,
    createUser,
    deleteUser,
    getUserbyId
};