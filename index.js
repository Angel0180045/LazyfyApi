'use strict'


let mongoose = require('mongoose');

let app = require('./app');

let port = process.env.PORT || 3000;
//crear conexion a base
mongoose.connect('mongodb://localhost/lazyfy', (err) => {
if (err) throw err;
console.log('La base de datos se ha conectado');

app.listen(port, err =>{
  if (err) throw err;
  console.log('Escuchando en puerto ' + port);
} )
})
