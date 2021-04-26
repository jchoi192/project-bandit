const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    text: String,
    googleId: String,
  }, {
    timestamps: true
  });
  
//   const userSchema = new mongoose.Schema({
//     name: String,
//     avatarURL: String,
//     googleId: String,
//     posts: [postSchema],
//   }, {
//     timestamps: true
//   });

// module.exports = mongoose.model('User', userSchema)

module.exports = mongoose.model('Post', postSchema)

