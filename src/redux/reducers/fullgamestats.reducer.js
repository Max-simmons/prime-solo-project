const fullGameStatsReducer = (state={}, action) => {
    if (action.type === 'SET_FULL_GAME_STATS') {
        return action.payload
    }
    return state;
}

export default fullGameStatsReducer;