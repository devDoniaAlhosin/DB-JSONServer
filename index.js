const jsonServer = require("json-server");
const low = require("lowdb");
const Memory = require("lowdb/adapters/Memory"); // In-memory adapter

const adapter = new Memory(); // Create an in-memory adapter instance
const db = low(adapter); // Pass the adapter to lowdb

// Optionally seed the in-memory database with initial data from your db.json
const initialData = require("./db.json"); // Load the initial data from db.json
db.defaults(initialData).write(); // Seed the in-memory db

const server = jsonServer.create();
const router = jsonServer.router(db); // Use the in-memory database
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3500;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

module.exports = server;
