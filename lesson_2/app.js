const usersArr = [
    {firstName : 'Kevin', lastName : 'Spacey', age : 62},
    {firstName : 'Matthew', lastName : 'David McConaughey', age : 51},
    {firstName : 'Keanu', lastName : 'Charles Reeves', age : 57}
];

const express = require('express');
const exprsHbs = require('express-handlebars');
const path = require('path');

const app = express();

// POST /users
// DELETE /users/:id
// GET /users
// GET /users/:id
// PUT /users/:id
// "One and point to rule them all"

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', exprsHbs({
    defaultLayout : false
}));
app.set('views', path.join(path.join(process.cwd(), 'views', 'pages')))

app.listen(5000, ()=> {
    console.log('App listen 5000');
});

// app.get('/', (req, res) => {
//     console.log(req);
//     res.send('TEST SERVER')
// });
// app.get('/users', (req, res) => {
//     res.write('1\n');
//     res.write('2\n');
//     res.write('3\n');
//     res.write('4\n');
//     res.write('5\n');
//     res.end()
// });
// app.get('/logs', (req, res) => {
//     res.json({name : 'Lionell', age : 32});
// })
// app.post('/logs', (req, res) => {
//     console.log(req.body);
//     // res.json({firstName : 'Ryahn', lastName : 'Dahl' });
//     res.json(req.body)
// })

app.get('/', (req, res) => {
    res.render('index', {users : usersArr})
});
app.get('/some', (req, res) => {
    res.render('some_if', {isOk : true, textAuthor : 'Antony Writer'})
});
app.post('/login', (req, res) => {
    const {login, password} = req.body;
    usersArr.push({login, password});
    console.log(usersArr);
    res.redirect('/some')
})