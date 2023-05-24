import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const total = useSelector((state) => state.totalReducer);
  const games = useSelector((store) => store.statsReducer);
  const totalGames = games.length

  console.log(totalGames);

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



console.log('points', total.total_points);
  
  return (
    <>
    <header>
      <Header  />
    </header>
    <div className="container">
      <h2>#{user.number} {user.username}</h2>
      <h4>{user.playstyle} {user.position}</h4>
      
      
      <button onClick={goToStats}>My Stats</button>
      <button onClick={addGame}>Add Game</button>
    </div>

    <div>
      <LogOutButton className="btn" />
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
