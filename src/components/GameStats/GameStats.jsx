import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function GameStats() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchStats();
    }, [])

    const fetchStats = () => {
        dispatch({
            type: 'SAGA/FETCH_STATS'
        })
    }

    return(
        <div>
            <h2>My Stats</h2>
        </div>
    )
}

export default GameStats;