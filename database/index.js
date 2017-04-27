var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('mongo connected');
  var repoSchema = mongoose.Schema({
    user: String,
    repo: String,
    url: String,
    forks: Number
  });

  var Repo = mongoose.model('Repo', repoSchema);
});

module.exports = db.Repo;