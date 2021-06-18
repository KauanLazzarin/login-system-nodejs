const express = require('express');
const session = require('express-session');
const path = require('path');

const server = express();
const port = 3003;

server.engine('html', require('ejs').renderFile);
server.use(session({secret:'jasbckasjdaeljc'})); 
server.set('view engine', 'html');
server.use('/public', express.static(path.join(__dirname, 'public')));
server.set('views', path.join(__dirname, 'views'));

server.get('/', (req, res) => {
    res.render('index.html')
})

server.listen(port, () => console.log('executando servidor'));
