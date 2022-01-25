const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    res.render('users', {usersArr});
});
usersRouter.post('/', (req, res) => {
    res.json('Users created');
});
usersRouter.delete('/', (req, res) => {
    res.json('Users delete');
});

module.exports = usersRouter;