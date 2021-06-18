const express = require('express');
const session = require('express-session');
const path = require('path');
const bp = require('body-parser');

const server = express();
const port = 4004;

const login = 'admin';
const pwd = 'admin123';

server.use(express.json());
server.use(bp.urlencoded({extended: true}));
server.engine('html', require('ejs').renderFile);
server.use(session({secret:'jasbckasjdaeljc'})); 
server.set('view engine', 'html');
server.use('/public', express.static(path.join(__dirname, 'public')));
server.set('views', path.join(__dirname, 'views'));

server.get('/', (req, res) => {
    if (req.session.login) {
        res.render('logged.html');
    } else {
        res.render('index.html');
    };
});

server.post('/', (req, res) => {
    
    if (req.body.login === login && req.body.password === pwd) {
        req.session.login = login;

        res.render('logged.html');
    } else {
        return res.render('index.html');
    };

});

server.listen(port, () => console.log('executando servidor'));
