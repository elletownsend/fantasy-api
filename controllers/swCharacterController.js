const fs = require('fs');

const characters = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/sw-characters.json`)
);

const firstChar = characters[0].id;
const lastChar = characters[characters.length - 1].id;

const getAllCharacters = (req, res) => {
  let results = [];

  if (req.query.q != undefined || req.query.q != null) {
    let query = req.query.q.toLowerCase().replace(/\s|[^\w]/g, '');

    results = characters.filter((item) =>
      item.name
        .toLowerCase()
        .replace(/\s|[^\w]/g, '')
        .includes(query)
    );
    if (results.length == 0) {
      return res.status(404).json({
        status: 'failed',
        message: 'No entry found matching given criteria'
      });
    }
  } else {
    results = characters;
  }

  res.status(200).json({
    status: 'success',
    results: results.length,
    data: {
      results
    }
  });
};

const getCharacter = (req, res) => {
  const id = req.params.id * 1;
  if (id * 1 < firstChar || id * 1 > lastChar || !/^\d+$/.test(id)) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID'
    });
  } else {
    const character = characters.find((item) => item.id == id);
    res.status(200).json({
      status: 'success',
      data: {
        character
      }
    });
  }
};

module.exports = { getAllCharacters, getCharacter };
