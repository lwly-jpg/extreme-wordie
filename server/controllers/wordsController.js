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

module.exports = {
  randomWord,
};
