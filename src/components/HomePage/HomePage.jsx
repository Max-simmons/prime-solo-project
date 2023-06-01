import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { Container } from '@mui/material';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const total = useSelector((state) => state.totalReducer);
  const games = useSelector((store) => store.statsReducer);
  const totalGames = games.length

  // console.log(total);

  // let {total_points, total_rebounds, total_assists,
  //    total_steals, total_blocks, total_fg, total_fga, total_turnovers, total_gamescore} = total;
  console.log(total);

  console.log('points', total.total_points);

  let avgPts = Math.round((Number(total.total_points)/totalGames)*100)/100;
  let avgAst = Math.round((Number(total.total_assists)/totalGames)*100)/100;
  let avgReb = Math.round((Number(total.total_rebounds)/totalGames)*100)/100;
  let avgTO = Math.round((Number(total.total_turnovers)/totalGames)*100)/100;
  let avgGmSc = Math.round((Number(total.total_gamescore)/totalGames)*100)/100;
console.log(avgPts);

  useEffect(() => {
    fetchStats();
    fetchTotals();
}, [])

const fetchStats = () => {
    dispatch({
        type: 'SAGA/FETCH_STATS'
    })
}

const fetchTotals = () => {
    dispatch({
      type: 'FETCH_TOTAL_STATS'
    })
}

const goToStats = () => {
    history.push("/gamestats")
  }

const addGame = () => {
    history.push("/addgame")
  }

const rulesPage = () => {
  history.push('/rules');
}

// console.log('points', total.total_points);
  
  return (
    <>
    <header>
      <Header  />
    </header>
    <Container>

   
    <Button onClick={() => dispatch({ type: 'LOGOUT' })} variant = 'contained'>LOGOUT</Button>
    <Button onClick= {rulesPage} variant = 'contained'>Rules</Button>
  
    <div className="container">
      <h2>#{user.number} {user.username}</h2>
      <h4>{user.playstyle} {user.position}</h4>
      <p>GP: {totalGames} || PPG: {avgPts} || RPG: {avgReb} || APG: {avgAst} || TOPG: {avgTO} || AVG GAMESCORE: {avgGmSc}</p>
      
      <Button color='success' onClick={addGame} variant='contained' startIcon={<AddCircleIcon />}>Add Game</Button>
     
      <Button onClick={goToStats} variant='contained'>My Stats</Button>
      
    </div>

    </Container>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
