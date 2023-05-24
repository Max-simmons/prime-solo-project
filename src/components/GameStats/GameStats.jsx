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

    const total = useSelector((state) => state.totalReducer)
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
            <tr>
                <td>Points Per Game:</td>
                <td>Rebounds Per Game:</td>
                <td>Assist Per Game</td>
                <td>Steals Per Game</td>
                <td>Blocks Per Game</td>
                <td>Turnovers Per Game</td>
                <td>Field Goal/Attempted Per Game:</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Total Points</td>
                <td>Total Rebounds</td>
                <td>Total Assists</td>
                <td>Total Steals</td>
                <td>Total Blocks</td>
                <td>Total Turnovers</td>
                <td>Field Goal Percentage</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
        </div>
        <div>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Score</th>
                    <th>PTS</th>
                    <th>TRB</th>
                    <th>AST</th>
                    <th>TOV</th>
                    <th>GmSc</th>
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