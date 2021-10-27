const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: String,
  createdOn: {
    type: Date,
    'default': Date.now
  }
});

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  'length': Number,
  artists: {
    type: [String],
    required: true
  },
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  releaseYear: Number,
  reviews: [reviewSchema]
});

mongoose.model('Song', songSchema);