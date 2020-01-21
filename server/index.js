const express = require('express');
let app = express();
const morgan = require('morgan');
const { save, Repo } = require('../database/index.js');
const { postHandler, getHandler } = require('../controller/controller.js')


const getReposByUsername  = require('../helpers/github.js');

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', postHandler);

app.get('/repos', getHandler);

let port = 1128;

app.listen(port, function() {
  console.log(`Ay dawg, listening on port ${port}`);
});

