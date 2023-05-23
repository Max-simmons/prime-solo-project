import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* deleteGame (action) {
    try{
        console.log('deleting game at:', action.payload)
        yield axios.delete(`/api/stats/${action.payload}`)
        yield put({type: 'SAGA/FETCH_STATS'})
    } catch {
        console.log('cant connect with server')
    }
}

function* sagaDeleteStats() {
    yield takeLatest('SAGA/DELETE_GAME', deleteGame)
}

export default sagaDeleteStats;