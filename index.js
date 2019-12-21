const express = require("express");
const helmet = require("helmet");
const cars = require("./cars/cars");
const server = express();
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 5000;

server.use(helmet());
server.use(express.json());

server.use("/api/cars", cars);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong"
  });
});

server.listen(port, host, () => {
  console.log(`\nRunning on http://${host}:${port}\n`);
});
