import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* fetchStats() {
    try{
        const stats = yield axios.get('/api/stats');
        console.log('in fetch stats', stats.data);
        yield put({
            type: 'SET_STATS', payload: stats.data
        })
    } catch {
        console.log('error couldnt get stats');
    }
}
function* sagaFetchStats() {
    yield takeLatest('SAGA/FETCH_STATS', fetchStats)
}
export default sagaFetchStats;