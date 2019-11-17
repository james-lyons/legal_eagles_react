import axios from 'axios';
import API_URL from '../constants';

const submitReview = (review_text, attorney_id) => {
    console.log('hi')
    console.log(review_text, attorney_id)
    return dispatch => {
        return axios.post(`${ API_URL }/review`,
            { review_text, attorney_id },
            { withCredentials: true})
                .then(res => {
                    dispatch({ type: "REVIEW_SUBMIT_FULFILLED"})
                    console.log('bye')
                    window.location.reload();
                })
                .catch(err => {
                    dispatch({ type: "REVIEW_SUBMIT_REJECTED", payload: err.response.data })
                });
    };
};

const editReview = (review_id, review_text) => {
    return dispatch => {
        return axios.put(`${ API_URL }/review/${ review_id }`,
            { review_text: review_text },
            { withCredentials: true})
                .then(res => {
                    dispatch({ type: "REVIEW_EDIT_FULFILLED"})
                    window.location.reload();
                })
                .catch(err => {
                    dispatch({ type: "REVIEW_EDIT_REJECTED", payload: err.response.data })
                });
    };
};

const deleteReview = (review_id) => {
    return dispatch => {
        return axios.delete(`${ API_URL }/review/${ review_id }`, { withCredentials: true})
        .then(res => {
            dispatch({ type: "DELETE_EDIT_FULFILLED" })
            window.location.reload();
        })
        .catch(err => {
            dispatch({ type: "DELETE_EDIT_REJECTED", payload: err.response.data })
        });
    };
};

export { 
    submitReview,
    editReview,
    deleteReview
}