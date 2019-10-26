import axios from 'axios';
import API_URL from '../constants';

const clientRegister = (data) => {
    return dispatch => {
        return axios.post(`${ API_URL }/auth/clientRegister`, data, { withCredentials: true })
            .then(res => {
                dispatch({ type: "CLIENT_REGISTER_FULFILLED", payload: res.data });
            })
            .catch(err => {
                dispatch({ type: "CLIENT_REGISTER_REJECTED", payload: err })
            });
    };
};

const clientLogin = (email, password) => {
    return dispatch => {
        return axios.post(`${ API_URL }/auth/clientLogin`,
            { email: email, password: password},
            { withCredentials: true })
                .then(res => {
                    localStorage.setItem('uid', res.data.data.id);
                    localStorage.setItem('user_type', res.data.data.user_type);
                    localStorage.setItem('client_name', res.data.data.name);
                    localStorage.setItem('client_email', res.data.data.email);
                    dispatch({ type: "CLIENT_LOGIN_FULFILLED", payload: res.data.data });
                    dispatch({ type: "USER_LOGIN_FULFILLED", payload: res.data });
                    window.location.reload();
                })
                .catch(err => {
                    dispatch({ type: "CLIENT_LOGIN_REJECTED", payload: err });
                });
    };
};

const clientLogout = () => {
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

export {
    clientRegister,
    clientLogin,
    clientLogout,
}