const jsonServer = require("json-server");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/Memory"); // Use in-memory adapter
const db = low(new FileSync());

const server = jsonServer.create();
const router = jsonServer.router(db); // In-memory, volatile data storage
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3500;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

module.exports = server;
