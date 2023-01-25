const express = require("express");
const cors = require("cors");
const wordRoutes = require("./routes/words");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(cors());

app.get("/", (request, response) => {
  response.send("Server is running");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
