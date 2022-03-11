const express = require('express');
const general = require('../controller/general_controller')
const router = express.Router();
const form = require('../controller/form_controller')
router.get('/', form.login)
router.get('/home', general.home);
router.get('/anime', general.anime);
router.get('/fanimation', general.fanimation);
router.get('/amv', general.amv);
router.get('/item', general.item); //later modify this with param for id
router.get('/manga', general.manga);
router.get('/merch', general.merch);
router.get('/ost', general.ost);
router.get('/hentai', general.hentai);


//create seprate routes for handling request with params

module.exports = router;