const postsData = require("../data/posts.js");



module.exports.index = function(req, res) {
    const postsJson = {
        postsData,
        count: postsData.posts.length
    }
    res.json(postsJson);
    }