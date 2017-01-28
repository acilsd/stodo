/*eslint no-console: "off"*/
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8090;

app.use(express.static('./public'))
    .get('*.js', (req, res, next) => {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      next();
    })
    .get('*',(req, res) => {
      res.sendFile(__dirname + '/index.html');
    });

app.listen(port, () => {
  console.info(`Server listening on port: ${port}`);
});
