import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import './AddGameForm.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from '@mui/material';

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
    const history = useHistory();


    // Game Score = Points Scored + (0.4 x Field Goals) – 
    // (0.7 x Field Goal Attempts) + (0.5 x Rebounds) +
    // + Steals + (0.7 x Assists)
    //  + (0.7 x Blocks) – Turnovers

    let result = (points) + (0.4 * fg) -
    (0.7 * fga) + (0.5 * rebounds) + steals
    + (0.7 * assists) + (0.7 * blocks) - turnovers 

    let gameScore = Number(result.toFixed(2));

    // console.log('gamescore', Number(result.toFixed(2)));
    

    const handleClick = (event) => {
        event.preventDefault();

        if (points > myTeam || fg > fga || fg > points || assists > myTeam)  {
            alert('INVALID INPUT');
        }
        else {
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
        history.push('/user')
    }
}
    const handleHome = () => {
        history.push('/user');
    }


    return(
        <>
        <header>
            <Header />
        </header>
        <h2>Add Game</h2>
        <section className = "container">
        <form>
            <div>
            <TextField
                label='Points'
                color='secondary'
                size='small'
                margin='normal'
                type='text'
                value={points}
                onChange={(event) => setPoints(Number(event.target.value))}/>
            
            </div>
            <div>
            <TextField
                label='Rebounds'
                color='secondary'
                size='small'
                margin='normal'
                type='text'
                value={rebounds}
                onChange={(event) => setRebounds(Number(event.target.value))}/>
        
            </div>
            <div>
            <TextField
                label='Assists'
                color='secondary'
                size='small'
                margin='normal'
                type='text'
                value={assists}
                onChange={(event) => setAssists(Number(event.target.value))}/>
            </div>
            <div>
            <TextField
                label='Steals'
                color='secondary'
                size='small'
                margin='normal'
                type='text'
                value={steals}
                onChange={(event) => setSteals(Number(event.target.value))}/>
            
            </div>
            <div>
            <TextField
                label='Block'
                color='secondary'
                size='small'
                margin='normal'
                type='text'
                value={blocks}
                onChange={(event) => setBlocks(Number(event.target.value))}/>
            
            </div>
            <div> 
                <TextField
                label='Field Goals'
                color='secondary'
                size='small'
                margin='normal'
                type='text'
                value={fg}
                onChange={(event) => setFg(Number(event.target.value))}/>
                
                <TextField
                label='FG Attempted'
                color='secondary'
                size='small'
                margin='normal'
                type='text'
                value={fga}
                onChange={(event) => setFga(Number(event.target.value))}/>
            </div>
            <div>
                <TextField
                label='Turnovers'
                color='secondary'
                margin='normal'
                size='small'
                type='text'
                value={turnovers}
                onChange={(event) => setTurnovers(Number(event.target.value))}/>
            </div>
            <div>
            
                <label>Date: </label>
                <TextField
                size='small'
                type='date'
                value={date}
                onChange={(event) => setDate(event.target.value)}/>
        
            </div>
            <div>
                <h3>Score</h3>
            </div>
            <div>
                <TextField
                label='My Team'
                color='secondary'
                type='text'
                size='small'
                value={myTeam}
                onChange={(event) => setMyteam(Number(event.target.value))}/>
                <>vs</>
                <TextField
                label='Opponent'
                color='secondary'
                margin='normal'
                size='small'
                type='text'
                value={opp}
                onChange={(event) => setOpp(Number(event.target.value))}/>
            </div>         
        </form>
        
        </section>
        <div className ='buttonContainer'>
        <Button onClick= {handleHome} variant='contained' startIcon={<HomeIcon />}>Home</Button>
        <Button color='success' onClick={handleClick} variant='contained' startIcon={<AddCircleIcon />}>Add Game</Button>

        </div>

        
        </>
    )
}
export default AddGameForm; 
