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



function* sagaAddGame() {
    yield takeLatest('SAGA/ADD_GAME', addGame);

}

export default sagaAddGame;