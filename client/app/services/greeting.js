import axios from 'axios'
import { AUTH_TOKEN_HEADER, API_URL } from '../config/appConfig'


const greeting = {

  fetch () {
    const token = localStorage.getItem('token');
    if(token) {
      return axios.get(API_URL + "greeting", {headers: {AUTH_TOKEN_HEADER: token}});
    } else {
      return new Promise(function(resolve, reject){ reject(); });
    }
  }

}

export default greeting
