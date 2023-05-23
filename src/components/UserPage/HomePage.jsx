import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchStats();
}, [])

const fetchStats = () => {
    dispatch({
        type: 'SAGA/FETCH_STATS'
    })
}

  const goToStats = () => {
    history.push("/gamestats")
  }

  const addGame = () => {
    history.push("/addgame")
  }
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <button onClick={goToStats}>My Stats</button>
      <button onClick={addGame}>Add Game</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
