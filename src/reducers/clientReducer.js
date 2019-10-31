
function clientReducer(state = {
    client: {
        name: "",
        email: "",
    },
    user_id: "",
    user_type: "",
    errors: [],
    message: "",
}, action) {
    
    switch(action.type) {
        case "CLIENT_REGISTER_FULFILLED": 
            return {...state };

        case "CLIENT_REGISTER_REJECTED": 
            return {
                ...state,
                errors: action.payload.errors,
                message: action.payload.message
            };

        case "CLIENT_LOGIN_FULFILLED": 
            return {
                ...state,
                user_id: action.payload.id,
                user_type: action.payload.user_type,
                client: {
                    name: action.payload.name,
                    email: action.payload.email,
                }
            };

        case "CLIENT_LOGIN_REJECTED":
            return {
                ...state,
                errors: action.payload.errors,
                message: action.payload.message
            };

        case "CLIENT_LOGOUT_FULFILLED": 
            return { ...state, user_id: null, user_type: null };

        case "CLIENT_LOGOUT_REJECTED":
            return { ...state, errors: action.payload.response.data.errors };

        default:
            return state;
    };
};

export default clientReducer;