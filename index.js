const jsonServer = require("json-server");
const fs = require("fs");
const path = require("path");

// Load db.json content into memory
const dbFile = path.join(__dirname, "db.json");
const dbData = JSON.parse(fs.readFileSync(dbFile, "utf-8"));

const server = jsonServer.create();
const router = jsonServer.router(dbData); // Use the in-memory object
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3500;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
