import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* fetchStats() {
    try{
        const stats = yield axios.get('/api/stats');
        console.log('in fetch stats', stats.data);
        yield put({
            type: 'SET_STATS', 
            payload: stats.data
        })
    } catch {
        console.log('error couldnt get stats');
    }
}

function* fetchFullGameStats(action) {
    const gameId = action.payload;
    try {
        const game = yield axios.get(`/api/stats/${gameId}`);
        const fullGameStats = game.data;
        yield put({
            type: 'SET_FULL_GAME_STATS',
            payload: fullGameStats
        })
    } catch (err) {
        console.log('getting full game stats err', err);
        console.log('gameid', gameId);
    }
}

function* fetchTotalsStats() {
    try{
        const totals = yield axios.get('/api/stats/total');
        yield put({
            type: 'SET_TOTALS',
            payload: totals.data
        })
    } catch (err) {
        console.log('Error in getting totals', err);
    }
}

function* finalizeStatsEdit(action) {
    try {
        const editedStats = action.payload

        const response = yield axios({
            method: 'PUT',
            url: `/api/stats/${editedStats.id}`,
            data: editedStats = action.payload
        })
        yield put ({
            type: 'SAGA/FETCH_STATS'
        })
    } catch (err) {
        console.log('editing fail', err);
    }
}

function* sagaFetchStats() {
    yield takeLatest('SAGA/FETCH_STATS', fetchStats);
    yield takeLatest('FETCH_FULL_GAME_STATS', fetchFullGameStats);
    yield takeLatest('FETCH_TOTAL_STATS', fetchTotalsStats);
}
export default sagaFetchStats;