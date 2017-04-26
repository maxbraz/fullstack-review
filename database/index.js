const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Schema = mongoose.Schema;

const repoSchema = Schema({
  user: Mixed,
  repo: Mixed,
  url: Mixed,
  forks: Number
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected');
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;