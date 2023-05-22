const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')


router.get('/', rejectUnauthenticated, (req, res) => {
  pool.query(`SELECT * FROM "game_stats"`)
    .then(dbRes => {
      res.send(dbRes.rows);
    }).catch(dbErr => {
      console.log('Error connecting with DB:', dbErr);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
