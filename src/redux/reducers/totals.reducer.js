const totalReducer = (state = {}, action) => {
    switch (action.type){
        case 'SET_TOTALS':
            return action.payload;
        default:
            return state
    }   
};

export default totalReducer;