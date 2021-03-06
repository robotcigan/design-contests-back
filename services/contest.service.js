// const mongoose = require('mongoose');
const Contest = require('../models/contest.model.js');
const moment = require('moment');

// Find all contests
module.exports.findContests = () => {
  return Contest.find();
}

// Find one contest
module.exports.findContestById = (id) => {
  return Contest.findById(id);
}

// Create contest
module.exports.createContest = (contest) => {
  return Contest.create(contest);
}

// Remove contest
module.exports.removeContest = (id) => {
  return Contest.findByIdAndRemove(id);
}

// Remove multiple contests
module.exports.removeMultipleContests = (removeMultiple) => {
  console.log('remove multiple contests', removeMultiple)
  return Contest.deleteMany({ _id: removeMultiple })
  // return 'from server'
  // return Contest.deleteMany({_id: [
  //   '604a6219bfa39e3d082ea8c7',
  //   '603aaa2ffab0ea1d9865103f',
  //   '603aaa019cc8b34940829db2'
  // ]})
}

// Edit contest
module.exports.editContest = (id, contest) => {
  return Contest.findByIdAndUpdate(id, contest);
}





// // Post Schema
// var postSchema = mongoose.Schema({
//   title:   { type: String, required: true },
//   topic:   { type: String },
//   previewContent: { type: String, required: true },
//   content: { type: String, required: true },
//   createdDate: {
//     type: Date,
//     default: Date.now
//   }
// });

// var Post = module.exports = mongoose.model('Post', postSchema);
// module.exports = mongoose.model('Post', postSchema);

// // get Posts
// module.exports.getPosts = function(limit) {
//   return Post.find().limit(limit);
// }

// // get Post
// module.exports.getPostById = function(id) {
//   return Post.findById(id);
//   console.log('fdsgs')
// }

// // create Post
// module.exports.createPost = function(post) {
//   return Post.create(post);
// }

// // delete Post
// module.exports.deletePost = function(id) {
//   return Post.findByIdAndRemove(id);
// }

// // update Post
// module.exports.updatePost = function(id, post) {
//   console.log(id, post)
//   return Post.findByIdAndUpdate(id, post);
// }