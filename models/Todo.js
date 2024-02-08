const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const TodoSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    default: 'Untitled',
  },
  description: {
    type: String,
    default: `Add description here`,
  },

});
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;