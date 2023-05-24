import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



function MoreStatsPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const gameId = params.id;
    const game = useSelector(store => store. fullGameStatsReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_FULL_GAME_STATS',
            payload: gameId
        })
    }, [])

    const fieldGoalPercentage = game.fg/game.fga

    const fixedfgp = Math.round(fieldGoalPercentage * 100)

    console.log(fixedfgp)

    const backButton = () => {
        history.push('/gamestats');
    }


    return(
        <>
        <h3>Full Game Stats</h3>
        <p>Points: {game.points}</p>
        <p>Assist: {game.assists}</p>
        <p>Rebounds: {game.rebounds}</p>
        <p>Steals: {game.steals}</p>
        <p>Blocks: {game.blocks}</p>
        <p>Turnover: {game.turnovers}</p>
        <p>Field Goals: {game.fg}/{game.fga}</p>
        <p>Field Goal Pecentage: {fixedfgp}%</p>
        <button onClick= {backButton}>Back</button>

        
        </>

)
}

export default MoreStatsPage