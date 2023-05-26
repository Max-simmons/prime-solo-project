const fullGameStatsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FULL_GAME_STATS':
            return action.payload;
        case 'TYPING_NEW_STATS':
            return { ...state, ...action.payload }

            // points: action.payload, rebounds: action.payload,
            //  assists: action.payload, steals: action.payload,
            //   blocks: action.payload, fg: action.payload,
            //    fga: action.payload, turnovers: action.payload}
            break;

        default:
            return state
    }
}

export default fullGameStatsReducer;