'use strict';
const jsonServer = require('json-server');
require('dotenv').config();
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

router.render = (req, res) => {
  res.jsonp({
    count: res.locals.data.length,
    results: res.locals.data,
  });
};

server.use(middlewares);
server.use('/api/v1', router);

server.listen(port, () => {
  console.log(`JSON server is running on port ${port}!`);
});
