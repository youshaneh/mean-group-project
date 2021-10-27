const mongoose = require('mongoose');
const Song = mongoose.model('Song');

const getSongList = async (req, res) => {
  const songs = await Song.find();
  res
    .status(200)
    .json(songs);
}
const getSong = (req, res) => {
  if (req.params && req.params.songid) {
    Song
      .findById(req.params.songid)
      .exec((err, song) => {
        if (!song) {
          res	
            .status(404) 
            .json({	
              "message": "songid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(song);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No songid in request"
      });		
  }
}
const createSong = (req, res) => {
  Song.create({
    name: req.body.name,
    length: req.body.length,
    artists: req.body.artists,
    releaseYear: req.body.releaseYear
  }, (err, song) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(song);
    }
  });
}
const updateSong = (req, res) => {  
  if (!req.params.songid) {
    res
      .status(404)
      .json({
        "message": "Not found, songid is required"
      });
    return;
  }
  Song
    .findById(req.params.songid)
    .select('-reviews -rating')
    .exec((err, song) => {
      if (!song) {
        res
          .json(404)
          .status({
            "message": "songid not found"
          });
        return;
      } else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }
      song.name = req.body.name;
      song.rating = req.body.rating;
      song.length = req.body.length;
      song.artists = req.body.artists;
      song.releaseYear = req.body.releaseYear;
      song.save((err, song) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(song);
        }
      });
    }
  );
}
const deleteSong = (req, res) => {
  const songid = req.params.songid;
  if (songid) {
    Song
      .findByIdAndRemove(songid) 
      .exec((err, song) => {
          if (err) {
            res
              .status(404)
              .json(err);
            return;
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No songid"
      });
  }
}

module.exports = {
  getSongList,
  getSong,
  createSong,
  updateSong,
  deleteSong
};
