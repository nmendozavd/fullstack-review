const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connnection error:'));
// db.once('open',function () {

// })

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;