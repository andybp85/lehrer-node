import axios from 'axios'
import { AUTH_TOKEN_HEADER, API_URL } from '../constants/appConfig'


const greeting = {

  fetch () {
    const token = localStorage.getItem('token');
    if(token) {
      return axios.get("http://localhost:3000/api/greeting", {headers: {"Authorization": token}});
    } else {
      return new Promise(function(resolve, reject){ reject(); });
    }
  }

}

export default greeting
