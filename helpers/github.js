const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios to GET repos for a specific
  // user from the github API

  axios({
    method: 'get',
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
  })
    .then((response) => {
      // console.log(response.data);
      var data = response.data;
      callback(null, data);
    })
    .catch((err) => {
      console.log(err);
    })

};

module.exports = { getReposByUsername };