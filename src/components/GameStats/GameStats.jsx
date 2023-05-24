import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import GameItem from './GameItem/GameItem';

function GameStats() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        fetchStats();
    }, [])


    const games = useSelector((store) => store.statsReducer)

    const totalGames = games.length

    console.log(totalGames);

    const backButton = () => {
        history.push('/user');
    }
    // console.log('games', games);
    const fetchStats = () => {
        dispatch({
            type: 'SAGA/FETCH_STATS'
        })
    } 

    return(
        <>
        <div>
            <h2>My Stats</h2>
        </div>
        <div>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Score</th>
                    <th>Points</th>
                    <th>Rebounds</th>
                    <th>Assist</th>
                    <th>Turnovers</th>
                    <th>Game Score</th>
                </tr>
            </thead>
            <tbody>
            {
                 games.map((game) => {
                    return <GameItem 
                     game={game}
                   />
            })
            }
            </tbody>

        </table>
        
        </div>

        <div>
            <button onClick= {backButton}>Back</button>
        </div>
        </>
    )
}

export default GameStats;