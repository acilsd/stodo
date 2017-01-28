/*eslint no-console: "off"*/
const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 8090;

app.use(compression());

app.use(express.static('./public'))
    .get('*',(req, res) => {
      res.sendFile(__dirname + '/index.html');
    });

app.listen(port, () => {
  console.info(`Server listening on port: ${port}`);
});
