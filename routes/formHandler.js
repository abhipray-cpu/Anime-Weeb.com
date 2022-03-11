const express = require('express')
const router = express.Router()
const formHandler = require('../controller/formHandler_controller')

router.post('/form', formHandler.form)
module.exports = router