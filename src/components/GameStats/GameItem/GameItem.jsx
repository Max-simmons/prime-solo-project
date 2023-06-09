import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';


function GameItem({game}) {

const history = useHistory();
const dispatch = useDispatch();
console.log('games', game);

const newDate= new Date(game.date).toLocaleDateString('en-US');

// const deleteGame = () => {
//     console.log('clicked', game.id);
//     dispatch({
//         type: 'SAGA/DELETE_GAME',
//         payload: game.id
//     })
// }

const moreStatsPage = () => {
    history.push(`/morestats/${game.id}`);
}


return (
    <>
    <tr key={game.id}>
    <td>{newDate}</td>
    <td>{game.my_team_score} vs {game.opp_score}</td>
    <td>{game.points}</td>
    <td>{game.rebounds}</td>
    <td>{game.assists}</td>
    <td>{game.turnovers}</td>
    <td>{game.game_score}</td>
    <td><Button onClick={moreStatsPage} size='small' color='secondary' variant='outlined'>More Stats</Button></td>
    {/* <td><button onClick={deleteGame}>Delete</button></td> */}
    </tr>
        
    </>
)

}




export default GameItem;