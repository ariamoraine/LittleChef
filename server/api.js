'use strict'
const app = require('APP'), {env} = app
const db = require('APP/db')
const api = module.exports = require('express').Router()
const client = require('twilio')(env.SID, env.TOKEN)

api
  .post('/twilio', function (req, res, next) {
    console.log("THIS IS REQ BODY", req.body)
    client.messages.create({
      to: `+1${req.body.phone}`,
      from: `+${env.TWILIO_NUMBER}`,
      body: req.body.shoppingList
    }, function (err, message) {
      if (err) {
        console.log(err)
      } else {
        res.send(message.sid)
      }
    });
  })
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/recipes', require('./recipes'))


// No routes matched? 404.
api.use((req, res) => res.status(404).end())
