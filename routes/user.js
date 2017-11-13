'use strict'

var express = require('express')
let userController = require('../Controllers/user')
let api = express.Router()

api.get('/prueba', userController.prueba);
api.post('/register', userController.saveUser);
api.post('/login', userController.loginUser);
api.get(' /users', userController.listUsers);
module.exports = api;
