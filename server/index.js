const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Repo = require('./../database/index.js');
const request = require('request');
const Promise = require('bluebird');
// var rp = require('request-promise');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.post('/repos/import', function (req, res) {
  request({
    method: 'GET',
    uri: `https://api.github.com/users/${req.body.username}/repos`,
    headers: {
      'user-agent': 'maxbraz',
      'Authorization': 'token 3f7eed19573071401f74814c6ea9a596fe06acea'
    }
  },
    function(error, response, body) {
      console.log('the decoded data is: ' + body);
      body = JSON.parse(body);

      for (let repo of body) {
        let repoId = repo.id;
        let repoName = repo.name;
        let url = repo.html_url;
        let forks = repo.forks;
        console.log('*****************', repoName);

        //create a new collection in the table with the data above
        let newRepo = new Repo({ 
          repoId: repoId,
          repoName: repoName,
          url: url,
          forks: forks 
        });

        newRepo.save((err, newRepo, numAffected) => {
          if (err) {
            return console.error();
          } else {
            console.log('********* New Collection Saved to the DB *******');
          }
        });
      }
    }
  );
  
  res.send('repo added');
});

app.get('/repos', function (req, res) {
  //find 25 repos by fork
  Repo.find({}).sort({forks: -1}).limit(25).exec((err, repolist) => { 
    res.send(JSON.stringify(repolist));
  });
  
});

const port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

