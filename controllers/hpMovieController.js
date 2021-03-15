const fs = require('fs');

const movies = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/hp-movies.json`)
);

const firstMov = movies[0].id;
const lastMov = movies[movies.length - 1].id;

const getAllMovies = (req, res) => {
  let results = [];

  if (req.query.q != undefined || req.query.q != null) {
    let query = req.query.q.toLowerCase().replace(/\s|[^\w]/g, '');

    results = movies.filter((item) =>
      item.title
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
    results = movies;
  }

  res.status(200).json({
    status: 'success',
    results: results.length,
    data: {
      results
    }
  });
};

const getMovie = (req, res) => {
  const id = req.params.id * 1;
  if (id * 1 < firstMov || id * 1 > lastMov || !/^\d+$/.test(id)) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID'
    });
  } else {
    const movie = movies.find((item) => item.id == id);

    res.status(200).json({
      status: 'success',
      data: {
        movie
      }
    });
  }
};

module.exports = { getAllMovies, getMovie };
