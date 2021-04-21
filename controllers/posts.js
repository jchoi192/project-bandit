const Tweet = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
}

function index(req, res) {
    Tweet.find({}, function(err, posts) {
        res.render('posts/index', { posts });
    });
};

function newPost(req, res) {
    res.render('posts/index')
};

function create(req, res) {
    Tweet.create(req.body, function(err, post) {
        if (err) return res.redirect('/posts');
        res.redirect('/posts')
    });
}
