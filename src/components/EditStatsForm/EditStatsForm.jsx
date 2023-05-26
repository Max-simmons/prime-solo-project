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
        history.push(`/morestats/${game.id}`)

    }

    let result = (points) + (0.4 * fg) -
    (0.7 * fga) + (0.5 * rebounds) + steals
    + (0.7 * assists) + (0.7 * blocks) - turnovers 

    let gameScore = Number(result.toFixed(2));

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
                turnovers: turnovers,
                game_score: gameScore
            }
        })
        history.push(`/morestats/${game.id}`)
    }

    return (
        <>
            <h3>Edit Game</h3>
            <form>
                <div>
                    <label>
                        Points:
                        <input
                            type='text'
                            value={points}
                            onChange={(event) => setPoints(Number(event.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Rebounds:
                        <input
                            type='text'
                            value={rebounds}
                            onChange={(event) => setRebounds(Number(event.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Assists:
                        <input
                            type='text'
                            value={assists}
                            onChange={(event) => setAssists(Number(event.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Steals:
                        <input
                            type='text'
                            value={steals}
                            onChange={(event) => setSteals(Number(event.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Blocks:
                        <input
                            type='text'
                            value={blocks}
                            onChange={(event) => setBlocks(Number(event.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Field Goals/Attempted
                        <input
                            type='text'
                            value={fg}
                            onChange={(event) => setFg(Number(event.target.value))}
                        />
                        <>/</>
                        <input
                            type='text'
                            value={fga}
                            onChange={(event) => setFga(Number(event.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Turnovers:
                        <input
                            type='text'
                            value={turnovers}
                            onChange={(event) => setTurnovers(Number(event.target.value))}
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