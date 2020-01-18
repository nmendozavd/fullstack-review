// Complete the save function in database / index.js.This function will save the relevant data from the GitHub API in the mongo database.

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


var db = mongoose.connection;
db.on('error', console.log.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(Ay dawg, connected to DB!);
})

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  login: String,
  name: String,
  description: String,
  avatar_url: String,
  updated_at: String

});

let Repo = mongoose.model('Repo', repoSchema);


let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB
  
}

module.exports.save = save;