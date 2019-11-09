const express = require('express')
const router = express()
const inoarbRouter = require('./inoarbRoute')

module.exports = () => inoarbRouter(router, express)