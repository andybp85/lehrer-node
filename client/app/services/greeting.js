import axios from 'axios'
<<<<<<< HEAD
import { AUTH_TOKEN_HEADER, API_URL } from '../constants/appConfig'

=======
>>>>>>> parent of b2382fd... moving app conf into seperate module

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
