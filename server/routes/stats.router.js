const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')


router.get('/', rejectUnauthenticated, (req, res) => {
  let sqlValues = [req.user.id]
  pool.query(`SELECT * FROM "game_stats"
	WHERE user_id = $1;`, sqlValues)
    .then(dbRes => {
      res.send(dbRes.rows);
    }).catch(dbErr => {
      console.log('Error connecting with DB:', dbErr);
    })
});

router.get('/total', rejectUnauthenticated, (req, res) => {
  let sqlValues = [req.user.id]
  pool.query(`SELECT
	SUM(points) AS total_points,
	SUM(rebounds) AS total_rebounds, 
	SUM(assists) AS total_assists,
	SUM(steals) AS total_steals,
	SUM(blocks) AS total_blocks,
	SUM(fg) AS total_fg,
	SUM(fga) AS total_fg,
	SUM(turnovers) AS total_turnovers,
	SUM(game_score) AS total_gamescore
	FROM "game_stats"
	WHERE user_id = $1;`, sqlValues)
    .then(dbRes => {
      res.send(dbRes.rows);
    }).catch(dbErr => {
      console.log('Error connecting with DB:', dbErr);
    })
});



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

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const idToDelete = req.params.id;
  const sqlQuery = `DELETE FROM game_stats WHERE id = $1;`

  pool.query(sqlQuery, [idToDelete])
    .then(dbRes => {
      res.send(200)
    }).catch(dbErr => {
      console.log('Error connecting with DB', dbErr);
    })
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const gameId = req.params.id;
  const userId = req.user.id;
  console.log('getting full stats');

  const sqlText = `
  SELECT * FROM "game_stats"
	WHERE "game_stats"."id"= $1
  AND "user_id" = $2  
  `
  const sqlValues = [gameId, userId];

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      const theGame = dbRes.rows[0];
      res.send(theGame);
    })
    .catch((dbErr) => {
      console.log('/api/gamestats/:id error:', dbErr);
      res.sendStatus(500);
    })
});


module.exports = router;
