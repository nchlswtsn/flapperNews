var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var Post = require('../models/Posts');
var Comment = require('../models/Comments');

router.get('/posts', function(req, res, next){
  Post.find(function(err, posts){
    if(err){ next(err); }

    res.json(posts);
  })
});

router.post('/posts', function(req, res, next){
  var post = new Post(req.body);

  post.save(function(err, post){
    if(err){ return next(err); }

    res.json(post);
  });
});



module.exports = router;
