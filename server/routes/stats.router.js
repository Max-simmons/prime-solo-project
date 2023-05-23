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
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.user.id);
  const points = req.body.points
  const rebounds = req.body.rebounds
  const assists = req.body.assists
  const steals = req.body.steals
  const blocks = req.body.blocks
  const fg = req.body.fg
  const fga = req.body.fga
  const turnovers = req.body.turnovers
  const game_score = req.body.game_score
  const my_team_score = req.body.my_team_score
  const opp_score = req.body.opp_score 
  const date = req.body.date
  const userId = req.user.id 

  const sqlValues = [points, rebounds, assists, steals, blocks, fg, fga, turnovers,
  game_score, my_team_score, opp_score, date, userId]

  const sqlQuery = `INSERT INTO "game_stats" ("points", "rebounds", "assists", "steals", 
  "blocks", "fg", "fga", "turnovers", "game_score", "my_team_score", "opp_score", "date", "user_id")
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);
  `
  
  pool.query(sqlQuery, sqlValues)
    .then(dbRes => {
      console.log('added stats');
      res.sendStatus(201);
    }).catch(dbErr => {
      console.log('Error conecting with DB', dbErr);
    })
});

module.exports = router;
