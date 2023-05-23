import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";

function AddGameForm() {
    const [points, setPoints] = useState('');
    const [rebounds, setRebounds] = useState('');
    const [assists, setAssists] = useState('');
    const [steals, setSteals] = useState('');
    const [blocks, setBlocks] = useState('');
    const [fg, setFg] = useState('');
    const [fga, setFga] = useState('');
    const [turnovers, setTurnovers] = useState('');
    const [date, setDate] = useState('');
    const [myTeam, setMyteam] = useState('');
    const [opp, setOpp] = useState('');
    const dispatch = useDispatch();


    // Game Score = Points Scored + (0.4 x Field Goals) – 
    // (0.7 x Field Goal Attempts) + (0.5 x Rebounds) +
    // + Steals + (0.7 x Assists)
    //  + (0.7 x Blocks) – Turnovers

    let result = (points) + (0.4 * fg) -
    (0.7 * fga) + (0.5 * rebounds) + steals
    + (0.7 * assists) + (0.7 * blocks) - turnovers 

    let gameScore = Number(result.toFixed(2));

    console.log('gamescore', Number(result.toFixed(2)));
    

    const handleClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SAGA/ADD_GAME',
            payload: {
                points: points,
                rebounds: rebounds,
                assists: assists,
                steals: steals, 
                blocks: blocks,
                fg: fg,
                fga: fga,
                turnovers: turnovers, 
                game_score: gameScore, 
                date: date,
                my_team_score: myTeam,
                opp_score: opp
            }
        }) 
    }


    return(
        <>
        <h2>Add Game</h2>
        <form>
            <div>
            <label>
                Points:
                <input 
                type='number'
                value={points}
                onChange={(event) => setPoints(Number(event.target.value))}/>
            </label>
            </div>
            <div>
            <label>
                Rebounds:
                <input
                type='number'
                value={rebounds}
                onChange={(event) => setRebounds(Number(event.target.value))}/>
            </label>
            </div>
            <div>
            <label>
                Assists:
                <input
                type='number'
                value={assists}
                onChange={(event) => setAssists(Number(event.target.value))}/>
            </label>
            </div>
            <div>
            <label>
                Steals:
                <input
                type='number'
                value={steals}
                onChange={(event) => setSteals(Number(event.target.value))}/>
            </label>
            </div>
            <div>
            <label>
                Blocks:
                <input
                type='number'
                value={blocks}
                onChange={(event) => setBlocks(Number(event.target.value))}/>
            </label>
            </div>
            <div> 
            <label>
                Field Goals/Attempted 
                <input
                type='number'
                value={fg}
                onChange={(event) => setFg(Number(event.target.value))}/>
                <input
                type='number'
                value={fga}
                onChange={(event) => setFga(Number(event.target.value))}/>
            </label>
            </div>
            <div>
            <label>
                Turnovers:
                <input
                type='number'
                value={turnovers}
                onChange={(event) => setTurnovers(Number(event.target.value))}/>
            </label>
            </div>
            <div>
            <label>
                Date:
                <input
                type='date'
                value={date}
                onChange={(event) => setDate(event.target.value)}/>
            </label>
            </div>
            <div>
                <h3>Score</h3>
            </div>
            <div>
                <input
                placeholder='My Team'
                type='number'
                value={myTeam}
                onChange={(event) => setMyteam(Number(event.target.value))}/>
                vs
                <input
                placeholder='Opponent'
                type='number'
                value={opp}
                onChange={(event) => setOpp(Number(event.target.value))}/>
            </div>
            <button onClick={handleClick}>Add Game</button>


            
        </form>
        </>
    )
}
export default AddGameForm; 
