const initialState = {
    cart: {}
}


const gistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT':
            return {
                ...state,
                cart: action.payload
            };
        case 'GET':
            return {
                ...state,
                cart: action.payload
            };
        default:
            return state;
    }
}

export default gistReducer;