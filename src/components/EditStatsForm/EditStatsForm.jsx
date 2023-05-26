import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function EditStatsForm() {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const gameId = params.id;
    const game = useSelector(store => store.fullGameStatsReducer);
    const [points, setPoints] = useState(game.points);
    const [rebounds, setRebounds] = useState(game.rebounds);
    const [assists, setAssists] = useState(game.assists);
    const [steals, setSteals] = useState(game.steals);
    const [blocks, setBlocks] = useState(game.blocks);
    const [fg, setFg] = useState(game.fg);
    const [fga, setFga] = useState(game.fga);
    const [turnovers, setTurnovers] = useState(game.turnovers);
    
    useEffect(() => {
        dispatch({
            type: 'FETCH_FULL_GAME_STATS',
            payload: gameId
        })
    }, [])

    useEffect(() => {
        if (game) {
            setPoints(game.points);
            setRebounds(game.rebounds);
            setAssists(game.assists);
            setSteals(game.steals);
            setBlocks(game.blocks);
            setFg(game.fg);
            setFga(game.fga);
            setTurnovers(game.turnovers);
        }
    }, [game])

    useEffect(() => {
        dispatch({
            type: 'TYPING_NEW_STATS',
            payload: {
                points,
                rebounds,
                assists,
                steals,
                blocks,
                fg,
                fga,
                turnovers
            }
        })
    }, [points, rebounds, assists, steals, blocks, fg, fga, turnovers])
    
    const backButton = () => {
        history.push('/morestats')

    }

    const editStats = () => {
        dispatch({
            type: 'FINALIZE_STAT_EDIT',
            payload: {
                id: game.id,
                points: points,
                rebounds: rebounds,
                assists: assists,
                steals: steals, 
                blocks: blocks,
                fg: fg,
                fga: fga,
                turnovers: turnovers
            }
        })

    
    }

    return (
        <>
            <h3>Edit Game</h3>
            <form>
                <div>
                    <label>
                        Points:
                        <input
                            type='number'
                            value={points}
                            onChange={(event) => setPoints(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Rebounds:
                        <input
                            type='number'
                            value={rebounds}
                            onChange={(event) => setRebounds(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Assists:
                        <input
                            type='number'
                            value={assists}
                            onChange={(event) => setAssists(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Steals:
                        <input
                            type='number'
                            value={steals}
                            onChange={(event) => setSteals(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Blocks:
                        <input
                            type='number'
                            value={blocks}
                            onChange={(event) => setBlocks(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Field Goals/Attempted
                        <input
                            type='number'
                            value={fg}
                            onChange={(event) => setFg(event.target.value)}
                        />
                        <>/</>
                        <input
                            type='number'
                            value={fga}
                            onChange={(event) => setFga(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Turnovers:
                        <input
                            type='number'
                            value={turnovers}
                            onChange={(event) => setTurnovers(event.target.value)}
                        />
                    </label>
                </div>
            </form>
            <div>
                <button onClick={backButton}>Back</button>
                <button onClick= {editStats}>Save</button>
            </div>



        </>
    )
}



export default EditStatsForm;