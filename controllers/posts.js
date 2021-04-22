const Tweet = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
    delete: deletePost,
    edit,
    update,
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

function deletePost(req, res) {
    console.log(req.params.id, "THIS IS THE ID");
    Tweet.findByIdAndDelete(req.params.id, function(err) {
    res.redirect('/posts');
    // Tweet.text.pull(req.params.id)
    });
};

function edit(req, res) {
    Tweet.findById(req.params.id, function(err, post) {
        console.log(post.text, "is this post")
        res.render('posts/edit', {
            post: post,
            postId: req.params.id
        });
    });
}

function update(req, res) {
    console.log(req.params.id, "this is the ID")
    console.log(req.body, "this is the BODYY")
    Tweet.findByIdAndUpdate(req.params.id, req.body, function(err, updatedPost) {
        res.redirect('/posts')
    });
};