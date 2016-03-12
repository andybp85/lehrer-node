var GreetingsController = require('../app/controllers/greetings_controller'),
    UsersController     = require('../app/controllers/users_controller'),
    SessionsController  = require('../app/controllers/sessions_controller'),
    PhrasesController   = require('../app/controllers/phrases_controller');


var routes = {
  config: [
    {method: 'GET',  path: '/api/hello',   config: {handler: GreetingsController.hello}},
    {method: 'POST', path: '/api/users',   config: {auth: false, handler: UsersController.create}},
    {method: 'POST', path: '/api/session', config: {auth: false, handler: SessionsController.login}},
    {method: 'POST', path: '/api/phrases', config: {handler: PhrasesController.create}},
    {method: 'GET',  path: '/api/phrases', config: {handler: PhrasesController.index}}
  ]
};

module.exports = routes;
