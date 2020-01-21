const { Repo, save } = require('../database/index.js');
const { getReposByUsername } = require('../helpers/github.js');


 postHandler = (req, res) => {
  var username = req.body.term;
  // This route should take the github username provided
  // and get the repo information from the github API
  getReposByUsername(username, (err, data) => {
    if (err) {
      console.log(err)
      res.status(500);
      res.end()
    } else {
      res.status(200);
      save(data);
      res.send(data);
    }
  });
  //then save the repo information in the database
};


// TODO - your code here!
// This route should send back the top 25 repos

getHandler = (req, res) => {
  Repo.find(function (err, docs) {
    if (err) {
      console.log(err);
      res.status(404);
      res.send(err);
    } else {
      console.log(docs)
      res.status(200);
      res.send(docs);
    }
  }).sort({ updated_at: 1 }).limit(25)
};

module.exports = { getHandler, postHandler };