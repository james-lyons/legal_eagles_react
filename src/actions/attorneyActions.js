import axios from 'axios';
import API_URL from '../constants';

const attorneyRegister = (data) => {
    return dispatch => {
        return axios.post(`${ API_URL }/auth/attorneyRegister`, data, { withCredentials: true })
            .then(res => {
                dispatch({ type: "ATTORNEY_REGISTER_FULFILLED", payload: res.data });
                window.location.reload();
            })
            .catch(err => {
                dispatch({ type: "ATTORNEY_REGISTER_REJECTED", payload: err })
            });
    };
};

const attorneyLogin = (email, password) => {
    return dispatch => {
        return axios.post(`${ API_URL }/auth/attorneyLogin`,
            { email: email, password: password},
            { withCredentials: true })
                .then(res => {
                    localStorage.setItem('uid', res.data.id);
                    localStorage.setItem('user_type', res.data.user_type);
                    dispatch({ type: "ATTORNEY_LOGIN_FULFILLED", payload: res.data });
                    dispatch({ type: "USER_LOGIN_FULFILLED", payload: res.data });
                    fetchAttorney(res.data.id);
                    window.location.reload();
                })
                .catch(err => {
                    dispatch({ type: "ATTORNEY_LOGIN_REJECTED", payload: err });
                });
    };
};

const attorneyLogout = () => {
        axios.post(`${ API_URL }/auth/logout`, { withCredentials: true })
            .then(res => {
                localStorage.removeItem('uid');
                localStorage.removeItem('user_type');
                window.location.reload();
            })
            .catch(err => {
                return { type: "USER_LOGOUT_REJECTED", payload: err };
            });
        return { type: "USER_LOGOUT_FULFILLED" }
};

const fetchAttorney = (attorney_id) => {
    return function(dispatch) {
        axios.get(`${ API_URL }/attorney/${ attorney_id }`, { withCredentials: true })
            .then(res => {
                dispatch({type: "FETCH_ATTORNEY_FULFILLED", payload: res.data})
            })
            .catch(err => {
                dispatch({type: "FETCH_ATTORNEY_REJECTED", payload: err})
            });
    };
};

const fetchAttorneys = (specialty, zipcode) => {
    return function(dispatch) {
        axios.get(`${ API_URL }/attorney/search`,
            { params: { specialty, zipcode } },
            { withCredentials: true })
                .then(res => {
                    dispatch({type: "FETCH_ATTORNEYS_FULFILLED", payload: res.data})
                })
                .catch(err => {
                    dispatch({type: "FETCH_ATTORNEYS_REJECTED", payload: err})
                });
    };
};

export {
    attorneyRegister,
    attorneyLogin,
    attorneyLogout,
    fetchAttorney,
    fetchAttorneys,
}