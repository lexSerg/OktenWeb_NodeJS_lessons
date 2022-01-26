// !Study json method

const express = require('express');
const exprsHbs = require('express-handlebars');
const path = require('path');
const usersArr = require('./data/users');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

app.set('view engine', '.hbs');
app.engine('.hbs', exprsHbs({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

const usersRouter = require('./routes/users.router');

app.use('/users', usersRouter);
app.get('/', (req, res) => {
    res.render('main', { isOk: false, userName: 'Ivan' });
});

app.post('/login', (req, res) => {
    const { name, age } = req.body;
    usersArr.push({ name, age });
    res.redirect('/users');
});

app.listen(5000, () => {
    console.log('App listen 5000');
});
