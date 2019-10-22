
function attorneyReducer(state = {
    attorney: {
        first_name: "",
        last_name: "",
        email: "",
        city: "",
        state: "",
        zipcode: 0,
        specialty: "",
        profile_image: "",
        reviews: [],
    },
    user_id: null,
    user_type: null,
    attorneys: [],
    errors: [],
    message: "",
}, action) {
    
    switch(action.type) {
        case "ATTORNEY_REGISTER_FULFILLED": 
            return {...state};

        case "ATTORNEY_REGISTER_REJECTED":
            return {
                ...state,
                errors: action.payload.response.data.errors,
                message: action.payload.response.data.message
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
                errors: action.payload.response.data.errors,
                message: action.payload.response.data.message
            };

        case "ATTORNEY_LOGOUT_FULFILLED": 
            return { ...state, user_id: null, user_type: null };

        case "ATTORNEY_LOGOUT_REJECTED":
            return { ...state, errors: action.payload.response.data.errors };

        case "FETCHED_ATTORNEY_FULFILLED":
            return {...state, errors: action.payload.response.data.errors};

        case "FETCHED_ATTORNEY_REJECTED":
            return {...state, errors: action.payload.response.data.errors};

        case "FETCHED_ATTORNEYS_FULFILLED":
            return [...state, { attorneys: action.data.attorneys }];

        case "FETCHED_ATTORNEYS_REJECTED":
            return {...state, errors: action.payload.response.data.errors};
        
        default:
            return state;
    };
};

export default attorneyReducer;