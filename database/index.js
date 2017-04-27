const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Schema = mongoose.Schema;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected');
});

var repoSchema = Schema({
  user: Mixed,
  repo: Mixed,
  url: Mixed,
  forks: Number
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;