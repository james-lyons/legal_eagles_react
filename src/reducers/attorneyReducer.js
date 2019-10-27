
function attorneyReducer(state = {
    attorney: {
        name: "",
        email: "",
        city: "",
        url: "",
        bio: "",
        state: "",
        zipcode: 0,
        specialty: "",
        profile_image: "",
        reviews: [],
    },
    user_id: null,
    user_type: null,
    results: null,
    fetched_attorney: null,
    errors: [],
    message: "",
}, action) {
    
    switch(action.type) {
        case "ATTORNEY_REGISTER_FULFILLED": 
            return {...state};

        case "ATTORNEY_REGISTER_REJECTED":
            return {
                ...state,
                errors: action.payload,
                message: action.payload.message
            };

        case "ATTORNEY_LOGIN_FULFILLED": 
            return {
                ...state,
                user_id: action.payload.id,
                user_type: action.payload.user_type
            };

        case "ATTORNEY_LOGIN_REJECTED": 
            return {
                ...state,
                errors: action.payload.errors,
                message: action.payload.message
            };

        case "ATTORNEY_LOGOUT_FULFILLED": 
            return { ...state, user_id: null, user_type: null };

        case "ATTORNEY_LOGOUT_REJECTED":
            return { ...state, errors: action.payload.response.data.errors };

        case "FETCH_ATTORNEY_FULFILLED":
            return { ...state, fetched_attorney: action.payload.data };

        case "FETCH_ATTORNEY_REJECTED":
            return { ...state, errors: action.payload.response.data.errors };

        case "FETCH_ATTORNEYS_FULFILLED":
            return { ...state, results: action.payload.data };

        case "FETCH_ATTORNEYS_REJECTED":
            return { ...state, errors: action.payload.response.data.errors };
        
        default:
            return state;
    };
};

export default attorneyReducer;