var Usuario = require('./modelUsuarios.js') 

module.exports.crearUsuarioDemo = function(callback){ 
  var arr = [{ email: 'demo@mail.com', user: "demo", password: "123456"}, { email: 'luis@mail.com', user: "luis", password: "123456"}];
  Usuario.insertMany(arr, function(error, docs) { 
    if (error){ 
      if (error.code == 11000){ 
        callback("Usuarios registrados!") 
      }else{
        callback(error.message) 
      }
    }else{
      callback(null, "Usuarios registrados en forma satisfactoria!") 
    }
  });
}
