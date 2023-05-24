import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* addGame(action) {
    try{
        const dbResponse = yield axios.post('/api/stats', action.payload)
        console.log ('got the req', action.payload);

        yield put({type: 'SAGA/FETCH_STATS'})
    } catch {
        console.log('error in posting');
    }
}

function* fetchFullGameStats(action) {
    const gameId = action.payload;
    try {
        const response = yield axios({
            method: 'GET',
            url: `/api/gamestats/${gameId}`
        })
        const fullGameStats = response.data;
        yield put({
            type: 'SET_FULL_GAME_STATS',
            payload: fullGameStats
        })
    } catch (err) {
        console.log('getting full game stats', err);
    }
}

function* sagaAddGame() {
    yield takeLatest('SAGA/ADD_GAME', addGame);
    yield takeLatest('SAGA/ADD_FULL_GAME', fetchFullGameStats);

}

export default sagaAddGame;