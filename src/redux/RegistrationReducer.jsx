const initialState = {
    userName: null,
    email: null
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUT_REGISTRATION':
            return {
                ...state,
                userName: action.payload,
                email: action.payload
            };
        default:
            return state;
    }

}

export default registrationReducer;