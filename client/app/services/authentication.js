import axios from 'axios'
import { AUTH_TOKEN_HEADER,
         LOGIN_URL,
         REGISTER_URL,
         LOGOUT_URL } from '../constants/appConfig'


const authentication = {

  isAuthenticated () {
    const token = localStorage.getItem('token');
    if(token) {
      return axios.get(LOGIN_URL, {headers: {AUTH_TOKEN_HEADER: token}});
    } else {
      return new Promise(function(resolve, reject){ reject(); });
    }
  },

  login (email, password, cb) {
    const promise = axios.post(LOGIN_URL, {email: email,
                                                            password: password});
    this.handleAuth(promise, cb);
  },

  register (email, password, passwordConfirmation, cb) {
    const promise = axios.post(REGISTER_URL, {email: email,
                                                               password: password,
                                                               passwordConfirmation: passwordConfirmation});
    this.handleAuth(promise, cb);
  },

  logout () {
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    axios.delete(LOGOUT_URL, {headers: {AUTH_TOKEN_HEADER: token}});
    return true;
  },

  handleAuth (promise, cb) {
    promise.then((resp) => {
      if (resp.data.token) {
        localStorage.setItem('token', resp.data.token);
        cb(true);
      }
    }).catch((error) => cb(false));
  }

}

export default authentication
