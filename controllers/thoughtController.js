const { User, Thought } = require("../models");

module.exports = {

    getThoughts(req, res) {
        User.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        User.findOne({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        User.findOne({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        User.findOne({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        User.findOne({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    createReaction(req, res) {
        User.findOne({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req, res) {
        User.findOne({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    }

}