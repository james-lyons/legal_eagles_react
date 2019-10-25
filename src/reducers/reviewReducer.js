function reviewReducer(state = {
    review_id: null,
    review_text: null,
    attorneys_id: null,
    errors: [],
    message: "",
}, action) {
    switch(action.type) {
        case "REVIEW_SUBMIT_FULFILLED":
            return state;

        case "REVIEW_SUBMIT_REJECTED":
            return {
                ...state,
                errors: action.payload.response.data.errors,
                message: action.payload.response.data.message
            };
            
        case "REVIEW_EDIT_FULFILLED":
            return state;

        case "REVIEW_EDIT_REJECTED":
            return {
                ...state,
                errors: action.payload.response.data.errors,
                message: action.payload.response.data.message
            };

        case "REVIEW_DELETE_FULFILLED":
            return state;

        case "REVIEW_DELETE_REJECTED":
            return {
                ...state,
                errors: action.payload.response.data.errors,
                message: action.payload.response.data.message
            };

        default:
            return state;
    };
};

export default reviewReducer;