var User = require('./../models/user');

var usersController = function(){
  return {
    create: function(request, reply) {
      var promise =  new User().create(request.payload);
      promise.then(function(data){ reply(data); })
             .catch(function(error){ reply(error); });
    },

    login: function(request, reply) {
      var promise =  new User().login(request.payload.email, request.payload.password);
      promise.then(function(data)  { reply(data);  })
             .catch(function(error){ reply(error); });
    }
  }
}();

module.exports = usersController;
