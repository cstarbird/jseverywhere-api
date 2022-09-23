const models = require("../models");
const { note } = require("./query");

module.exports = {
    // Resolve teh author info for a note when requested
    author: async (note, args, { models }) => {
        return await models.User.findById(note.author);
    },
    // Resolve the favoritedBy info fo a note when requested
    favoritedBy: async (note, args, { models }) => {
        return await models.User.find({ _id: { $in: note.favoritedBy } });
    }
};