const express = require('express')
const router = express.Router();
const form = require('../controller/form_controller')
router.get('/addAmv', form.amv)
router.get('/addAnime', form.anime)
router.get('/addManga', form.manga)
router.get('/addFanimation', form.Fanimation)
router.get('/addHentai', form.hentai)
router.get('/addMerch', form.merch)
router.get('/addOst', form.ost)
router.get('/login', form.login)
router.get('/signup', form.signup)
router.get('/admin', form.admin)

module.exports = router;