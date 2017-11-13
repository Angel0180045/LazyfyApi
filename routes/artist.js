'use strict'
 const router = require('express').Router()
  const artistController = require('../controllers/artist')
  let api = express.Router()
 api.post('/artists', artistController.create)
 api.get('/artists/:id?', artistController.read)
 api.put('/artists/:id', artistController.update)
 api.delete('/artists/:id', artistController.destroy)
 module.exports = api;  
