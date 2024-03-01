const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const {schemaOptions} = require("./modelOptions");
const TodoSchema = new mongoose.Schema({
    section: {
        type: Schema.Types.ObjectId,
        ref: 'Section',
        required: true,
    },
    title: {
        type: String,
        default: '',
    },
    content: {
        type: String,
        default: ''
    },
    position: {
        type: Number
    },


},schemaOptions);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;