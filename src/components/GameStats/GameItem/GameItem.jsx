import React from 'react';

function GameItem({game}) {
console.log('games', game);

const newDate= new Date(game.date).toLocaleDateString('en-US');

return (
    <>
    <tr key={game.id}>
    <td>{newDate}</td>
    <td>{game.my_team_score} vs {game.opp_score}</td>
    <td>{game.points}</td>
    <td>{game.rebounds}</td>
    <td>{game.assists}</td>
    <td>{game.game_score}</td>
    </tr>
        
    </>
)

}




export default GameItem;