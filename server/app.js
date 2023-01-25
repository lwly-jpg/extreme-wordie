const express = require("express");
const cors = require("cors");
const wordsRoutes = require("./routes/words");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/words", wordsRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
