const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const BoardSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  icon: {
    type: String,
    default: '🔃',
  },
  title: {
    type: String,
    default: 'Untitled',
  },
  description: {
    type: String,
    default: `Add description here
    🟢 You can add multiline description
    🟢 Let's start ...`,
  },
  position: {
    type: Number,
  },
  favourite: {
    type: Boolean,
    default: false,
  },
  favouritePosition: {
    type: Boolean,
    default: 0,
  },


});
const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;