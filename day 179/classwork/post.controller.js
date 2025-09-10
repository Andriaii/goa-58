const AppError = require('./appError');

exports.getPost = (req, res, next) => {
  const postId = req.params.id;

  
  if (!postId) {
    return next(new AppError('პოსტი ვერ მოიძებნა', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { id: postId, title: 'მაგალითი პოსტი' }
  });
};



const Post = require('../models/post.model'); 


exports.getPosts = async (req, res, next) => {
  try {
    const { gt } = req.query; 

    let posts;

    if (gt) {
      
      posts = await Post.find({ likes: { $gt: Number(gt) } });
    } else {
      
      posts = await Post.find();
    }

    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: posts
    });

  } catch (err) {
    next(err);
  }
};



exports.getPosts = async (req, res, next) => {
  try {
    const { tags } = req.query;

    let filter = {};
    if (tags) {
      
      const tagsArray = tags.split(",");
      filter = { tags: { $in: tagsArray } };
    }

    const posts = await Post.find(filter);

    res.status(200).json({
      status: "success",
      results: posts.length,
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};