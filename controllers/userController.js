const { User, Thought } = require("../models");

module.exports = {

    getUsers(req, res) {
        User.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.findOne({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOne({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findOne({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

}