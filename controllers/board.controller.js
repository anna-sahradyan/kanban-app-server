const User = require("../models/User");
const bcrypt = require("bcryptjs");

async function create(req, reply) {
    try {
        const boardsCount = await Board.find().count();
        const board = await Board.create({
            user: req.user._id,
            position: boardsCount > 0 ? boardsCount : 0
        })
        reply.code(201).send(board)

    } catch (err) {
        reply.code(500).send({message: "Something went wrong"});
    }

}

async function getAll(req, reply) {
    try {
        const boards = await Board.find({user: req.user._id}).sort('_position')
        reply.code(200).send(boards)

    } catch (err) {
        reply.code(500).send({message: "Something went wrong"})
    }

}

module.exports = {
    create,
    getAll

}