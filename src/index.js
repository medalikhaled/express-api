//Working with No frameworks (Vanilla Nodejs)

/*
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    console.log("Hello from Server");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000, http://localhost:3000");
});

*/

//Working with Express

import app from "./server";

app.listen(3000, () => {
  console.log("Server is running on port 3000, http://localhost:3000");
});
