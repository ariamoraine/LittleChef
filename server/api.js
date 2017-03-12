'use strict'
const app = require('APP'), {env} = app
const db = require('APP/db')
const api = module.exports = require('express').Router()
const client = require('twilio')(env.SID, env.TOKEN)

api
  .get('/twilio', function (req, res, next) {
    client.messages.create({
      to: `+${req.body.phoneNum}`,
      from: `+${env.TWILIO_NUMBER}`,
      body: 'THIS another test :)'
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
