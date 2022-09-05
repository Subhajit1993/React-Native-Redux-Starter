let defaultState = {
    jwt_token: null,
    user_details:null,
};

export default function Auth(state = defaultState, actions) {
    switch (actions.type) {
        case 'SET_AUTH_TOKEN':
            return {
                ...state,
                jwt_token: actions.payload
            };
        case 'SET_USER_DETAILS':
            return {
                ...state,
                user_details: actions.payload
            };
        default:
            return state
    }
};