const express = require('express');
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.post('/repos/import', function (req, res) {
  // TODO
});

app.get('/repos', function (req, res) {
  // TODO
});

const port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

