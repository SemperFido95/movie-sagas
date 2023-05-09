const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `
    SELECT m.id, m.title, g.name FROM movies_genres mg 
    JOIN movies m on mg.movie_id = m.id
    JOIN genres g on mg.genre_id = g.id;
  `;
  pool.query(query).then(result => {
    res.send(result.rows);
  }).catch(error =>{
    console.log(`Error in GET ${error}`);
    res.sendStatus(500);
  });
});

module.exports = router;