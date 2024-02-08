const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const SectionSchema = new mongoose.Schema({
  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
    required: true,
  },
  title: {
    type: String,
    default: '',
  },


});
const Section = mongoose.model('Section', SectionSchema);

module.exports = Section;