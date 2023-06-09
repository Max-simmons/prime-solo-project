import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GameItem from './GameItem/GameItem';
import './GameStats.css';
import Header from '../Header/Header';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Container } from '@mui/material';


function GameStats() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        fetchStats();
        fetchTotals();
    }, [])

    const total = useSelector((state) => state.totalReducer)
    const games = useSelector((store) => store.statsReducer)

    const totalGames = games.length

    console.log(totalGames);

    let avgPts = Math.round((Number(total.total_points)/totalGames)*100)/100;
    let avgAst = Math.round((Number(total.total_assists)/totalGames)*100)/100;
    let avgReb = Math.round((Number(total.total_rebounds)/totalGames)*100)/100;
    let avgStl = Math.round((Number(total.total_steals)/totalGames)*100)/100;
    let avgBl = Math.round((Number(total.total_blocks)/totalGames)*100)/100;
    let avgFg = Math.round((Number(total.total_fg)/totalGames)*100)/100;
    let avgFga = Math.round((Number(total.total_fga)/totalGames)*100)/100;

    const fgPer = total.total_fg/total.total_fga

    const fixedFgp = Math.round(fgPer * 100)


    let avgTO = Math.round((Number(total.total_turnovers)/totalGames)*100)/100;

    const backButton = () => {
        history.push('/user');
    }
    // console.log('games', games);
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

    return(
        <>
        <header>
            <Header />
        </header>
        <Container>
        <div>
            <h2>My Stats</h2>
        </div>
        <div>
        <table className= "careerStats">
            <tr>
                <td>Points Per Game</td>
                <td>Rebounds Per Game</td>
                <td>Assist Per Game</td>
                <td>Steals Per Game</td>
                <td>Blocks Per Game</td>
                <td>Field Goal/Attempts Per Game:</td>
                <td>Turnovers Per Game</td>
            </tr>
            <tr>
                <td>{avgPts}</td>
                <td>{avgReb}</td>
                <td>{avgAst}</td>
                <td>{avgStl}</td>
                <td>{avgBl}</td>
                <td>{avgFg}/{avgFga}</td>
                <td>{avgTO}</td>
                
            </tr>
            <tr>
                <td>Total Points</td>
                <td>Total Rebounds</td>
                <td>Total Assists</td>
                <td>Total Steals</td>
                <td>Total Blocks</td>
                <td>Field Goal Percentage</td>
                <td>Total Turnovers</td>
                
            </tr>
            <tr>
                <td>{total.total_points}</td>
                <td>{total.total_rebounds}</td>
                <td>{total.total_assists}</td>
                <td>{total.total_steals}</td>
                <td>{total.total_blocks}</td>
                <td>{fixedFgp}%</td>
                <td>{total.total_turnovers}</td>
                
            </tr>
        </table>
        </div>
        <div>
        <h4>Game Stats</h4>
        <table className="gameStats">
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
            <Button onClick={backButton} variant='contained' startIcon={<HomeIcon />}>Home</Button>
        </div>
        </Container>
        </>
    )
}

export default GameStats;