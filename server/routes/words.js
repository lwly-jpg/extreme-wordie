const express = require("express");
const { randomWord } = require("../controllers/wordsController");
const router = express.Router();

router.get("/random", randomWord);

module.exports = router;
