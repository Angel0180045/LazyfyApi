'use strict'

let express = require('express');
let bodyparser = require('body-parser');
const cors = require('cors');
 const os = require('os') ;
let app = express();

//cargar rutas
app.use(cors());

const user_routes = require('/routes/user');
const artist_routes=require('./routes/artist');
const album_routes = require('./routes/album');
const song_routes = require('./routes/song');

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/uploads', express.static(os.tmpdir()));


// configurar cabecera HTTP

// rutas base
/*app.get('/pruebas', function (req, res) {
  res.status(200).send({message: 'Bienvenido al curso de desarrollo web'});
}) ;*/

app.use('/api', user_routes);
app.use('/api', artist_routes);
app.use('/api', album_routes);
app.use('/api', song_routes);

// exportar para hacerla funcion
module.exports = app;
