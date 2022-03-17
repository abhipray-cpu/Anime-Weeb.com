const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI
const app = express()
const mongoose = require('mongoose')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
const session = require('express-session')
const mongoSession = require('connect-mongodb-session')(session)
const Store = new mongoSession({
    uri: MONGO_URI,
    collection: 'session'
})
app.use(session({
    secret: process.env.SESSION_SECRET, // always make sure this key is a good and strong string
    resave: false,
    saveUninitialized: false,
    store: Store,
}))
app.set('view engine', 'ejs');
app.set('views', 'views');

const general_routes = require('./routes/general_routes')
const form_routes = require('./routes/form')
const formHandler = require('./routes/formHandler')
app.use(general_routes)
app.use(form_routes)
app.use(formHandler)

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, )
    .then(user => {
        console.log('Connected Successfully!!');
        app.listen(4000);
    })
    .catch(err => { console.log(err) })