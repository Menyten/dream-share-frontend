const serverless = require("serverless-http");
const express = require("express");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use("/.netlify/functions/server", router);

// Test route to make sure the server is up
app.get("/.netlify/functions/server/ok", (req, res) => {
  res.send("ok");
});

module.exports.handler = serverless(app);
