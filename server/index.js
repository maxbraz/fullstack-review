const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Repo = require('./../database/index.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.post('/repos/import', function (req, res) {
  res.send('got a post request');
  console.log('req.body: ', req.body);
  //take the username and send it along to github
    //take the data from github and put it in the db
});

app.get('/repos', function (req, res) {
  // TODO
});

const port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

