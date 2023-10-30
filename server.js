const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static('view'));
app.use(express.static('public/css'));
app.use(express.static('public/js'));
app.use(express.static('public/ico'));
app.use(express.static('public/images'));


const routes = require('./config/routes');

app.use('/', routes);

app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`);
});