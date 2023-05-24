const fullGameStatsReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_FULL_GAME_STATS':
            return action.payload
        default:
            return state
    }
}

export default fullGameStatsReducer;