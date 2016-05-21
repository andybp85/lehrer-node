var baseURL = 'http://localhost:5000/';

module.exports = {
    BASE_URL          : baseURL,
    API_URL           : baseURL + 'api/v1.0/',
    LOGIN_URL         : baseURL + '/login',
    REGISTER_URL      : baseURL + '/register',
    LOGOUT_URL        : baseURL + '/logout',
    AUTH_TOKEN_HEADER : 'authentication_token'
};
