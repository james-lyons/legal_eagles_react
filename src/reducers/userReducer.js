
function userReducer(state = {
    user_id: null,
    user_type: null,
    attorneys: [],
    errors: [],
    message: "",
}, action) {

    switch(action.type) {
        case "USER_LOGIN_FULFILLED": 
            return {
                ...state,
                user_id: action.payload.id,
                user_type: action.payload.user_type
            };

        case "USER_LOGIN_REJECTED": 
            return {
                ...state,
                errors: action.payload.response.data.errors,
                message: action.payload.response.data.message
            };

        case "USER_LOGOUT_FULFILLED": 
            return {
                ...state,
                user_id: null,
                user_type: null
            };

        case "USER_LOGOUT_REJECTED": 
            return {
                ...state,
                user_id: null,
                user_type: null
            };

        default:
            return state;
    };
};

export default userReducer;