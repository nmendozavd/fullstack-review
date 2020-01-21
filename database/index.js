// Complete the save function in database / index.js.This function will save the relevant data from the GitHub API in the mongo database.

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Ay dawg, connected to MongoDB!');
})

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: true},
  login: String,
  name: String,
  description: String,
  updated_at: String

});

let Repo = mongoose.model('Repo', repoSchema);
// 
let save = (data) => {

  var schemaData = [];
  // for loop through data array of objs
  for(var i = 0; i < data.length; i++) {

    schemaData.push({
      id: data[i].id,
      login: data[i].owner.login,
      name: data[i].name,
      description: data[i].description,
      updated_at: data[i].updated_at
    });

  }
  // do not need new class instance in insertMany method, but we do need it in save
  // var document = new Repo(schemaData);
    // take properties in schema from each obj
   // model needs data for document property key values that correspond to what my schema needs
  // now that we made our new document, we can call the document.save method > that will input information into db
  Repo.insertMany(schemaData, function (err, success) {
    if(err) {
      console.error(err);
    } else {
      console.log('Inserted Information to Database!')

    }
  })
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB
}


module.exports = { save, Repo };