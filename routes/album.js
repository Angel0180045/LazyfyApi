'use strict'
 const router = require('express').Router();
 const albumController = require('../controllers/album');

 let api = express.Router();
 api.post('/albums', albumController.create)
 api.get('/albums/:id?', albumController.read)
 api.put('/albums/:id', albumController.update)
 api.delete('/albums/:id', albumController.destroy)
 module.exports = api;
