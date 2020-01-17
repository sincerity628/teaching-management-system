const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// get all students
router.get('/', (req, res) => {
  const query = 'select * from student';
  connection.query(query, (error, results) => {
    if(error) {
      throw error;
      res.status(400).json(error);
    } else {
      results.forEach(result => delete result.password);
      res.json(results);
    }
  });
});

module.exports = router;