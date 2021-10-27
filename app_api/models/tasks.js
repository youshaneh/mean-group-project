const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    // required: true
  },
  createdDate: {
    type: Date,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  priority: {
    type: Number,
    'default': 0,
    min: 0,
    max: 2
  },
  done: {
    type: Boolean,
    required: true
  }
});

mongoose.model('Task', taskSchema);