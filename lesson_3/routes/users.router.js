const { Router } = require('express');
const userscontroller = require('../controllers/users.controller');
const { chechUserValidity } = require('../middlewares/user.middleware')

const usersRouter = Router();

usersRouter.get('/', userscontroller.getUsers);
usersRouter.get('/:userId', userscontroller.getUserbyId);
usersRouter.post('/', chechUserValidity, userscontroller.createUser);
usersRouter.delete('/', userscontroller.deleteUser);

module.exports = usersRouter;