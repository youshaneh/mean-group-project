const express = require('express');
const router = express.Router();
const ctrlSong = require('../controllers/song');

router
  .route('/songs')
  .get(ctrlSong.getSongList)
  .post(ctrlSong.createSong);

router
  .route('/songs/:songid')
  .get(ctrlSong.getSong)
  .put(ctrlSong.updateSong)
  .delete(ctrlSong.deleteSong);

module.exports = router;
