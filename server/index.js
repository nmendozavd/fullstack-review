const express = require('express');
let app = express();
const morgan = require('morgan');
const getReposByUsername  = require('../helpers/github.js');

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  var username = req.body.term;
  // This route should take the github username provided
  // and get the repo information from the github API
  getReposByUsername(username, (err, data) => {
    if (err) {
      console.log(err)
      res.send(500);
      res.end()
    } else {
      res.status(200);
      console.log(data)
    }
  });

  //then save the repo information in the database


});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`Ay dawg, listening on port ${port}`);
});

