import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function EditStatsForm() {

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
    },[])

    return(
        <>
        <h3>Edit Game</h3>
            <form>
            <div>
            <label>
                Points:
                <input 
                type='number'
                value={game.points}
                />
            </label>
            </div>
            <div>
            <label>
                Rebounds:
                <input
                type='number'
                value={game.rebounds}
                />
            </label>
            </div>
            <div>
            <label>
                Assists:
                <input
                type='number'
                value={game.assists}
                />
            </label>
            </div>
            <div>
            <label>
                Steals:
                <input
                type='number'
                value={game.steals}
                />
            </label>
            </div>
            <div>
            <label>
                Blocks:
                <input
                type='number'
                value={game.blocks}
                />
            </label>
            </div>
            <div> 
            <label>
                Field Goals/Attempted 
                <input
                type='number'
                value={game.fg}
                />
                <input
                type='number'
                value={game.fga}
                />
            </label>
            </div>
            <div>
            <label>
                Turnovers:
                <input
                type='number'
                value={game.turnovers}
                />
            </label>
            </div>
        

            </form>




        </>
    )
}



export default EditStatsForm;