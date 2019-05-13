const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(__dirname + '/client')); // serves all files

app.listen(port, hostname, () => {
  console.log(`Node server running at port ${port}`);
})
