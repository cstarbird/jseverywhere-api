const models = require("../models");
const { user } = require("./query");

module.exports = {
    // Resolve teh list of notes for a user when requested
    notes: async (user, args, { models }) => {
        return await models.Note.find({ author: user._id }).sort({ _id: -1 });
    },
    // Resolve the list of favorites for auser when requeested
    favorites: async (user, args, { models }) => {
        return await models.Note.find({ favoritedBy: user._id }).sort({ _id: -1 });
    }
}