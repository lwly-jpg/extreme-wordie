const express = require("express");
const { randomWord, todaysWord } = require("../controllers/wordsController");
const router = express.Router();

router.get("/random", randomWord);
router.get("/today", todaysWord);

module.exports = router;
