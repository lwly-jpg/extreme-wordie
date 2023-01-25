const client = require("../database");

const randomWord = async (request, response) => {
  try {
    const randomId = Math.floor(Math.random() * 2498 + 1);
    const sql = "SELECT word FROM words WHERE id = $1";
    const data = await client.query(sql, [randomId]);
    const randomWord = data.rows[0].word;
    response.status(200).json({ word: randomWord });
  } catch (error) {
    console.log(error.message);

    response.status(400).json({ error: error.message });
  }
};

const todaysWord = async (request, response) => {
  try {
    const today = new Date();
    const sql = "SELECT word FROM words WHERE date = $1";
    const data = await client.query(sql, [today]);
    const todaysWord = data.rows[0].word;
    response.status(200).json({ word: todaysWord });
  } catch (error) {
    console.log(error.message);
    response.status(400).json({ error: error.message });
  }
};

module.exports = {
  randomWord,
  todaysWord
};
