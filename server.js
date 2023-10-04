const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/client'));

const route = require('./routes');

// Router init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
