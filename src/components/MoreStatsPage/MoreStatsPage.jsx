import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';



function MoreStatsPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const gameId = params.id;

    useEffect(() => {
        dispatch({
            type: 'FETCH_FULL_GAME_STATS',
            payload: gameId
        })
    }, [])


    return(
        <>
        <h3>Full Game Stats</h3>
        
        </>

)
}

export default MoreStatsPage