const express = require('express')

const UserController = require('./controllers/UserController')
const QuoteController = require('./controllers/QuoteController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

routes.get('/profile', ProfileController.index)

routes.get('/quotes', QuoteController.index)
routes.post('/quotes', QuoteController.create)
routes.delete('/quotes/:id', QuoteController.delete)

module.exports = routes
