var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main')
const ctrlAbout = require('../controllers/about')
const ctrlList = require('../controllers/list')

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/about', ctrlAbout.about);
router.get('/songs/new', ctrlList.create);
router.post('/songs/add', ctrlList.add);
router.get('/songs/:songid', ctrlList.detail);
router.get('/songs', ctrlList.list);

module.exports = router;
