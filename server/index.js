const http = require('http'); 
      path = require('path'), 
      express = require('express'), 
      session = require('express-session'), 
      bodyParser = require('body-parser'); 
      MongoClient = require('mongodb').MongoClient, 
      mongoose = require('mongoose'), 

      /*Definición de la base de datos mongodb*/
      mongoose.connect('mongodb://localhost:27017/agendanode_db');

const RoutingUsers = require('./rutasUsuarios.js'), 
      RoutingEvents = require('./rutasEventos.js') 

const PORT = 8080 
const app = express() 

const Server = http.createServer(app) 

app.use(express.static('client')) 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true}))
app.use(session({ 
    secret: 'secret-pass', 
    cookie: { maxAge: 3600000 }, 
    resave: false,
    saveUninitialized: true,
  }));

app.use('/usuarios', RoutingUsers) 
app.use('/events', RoutingEvents) 

/*INICIALIZAR EL SERVIDOR EN EL PUERTO ESPECIFICADO*/
Server.listen(PORT, function() { 
  console.log('Server is listening on port: ' + PORT) 
})
