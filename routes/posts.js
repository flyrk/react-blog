var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /posts 所有用户或者特定用户的文章页
//   eg: GET /posts?author=xxx
router.get('/', function(req, res, next) {
  res.send(req.flash());
});

// POST /posts 发表一篇文章
router.post('/', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/create 发表文章页
router.get('/create', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postId 单独一篇的文章页
router.get('/:postId', function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postId/edit 更新文章页
router.get('/:postId/edit', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// DELETE /posts/:postId/ 删除一篇文章
router.use('/:postId/', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /posts/:postId/comments 创建一条留言
router.post('/:postId/comment', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// DELETE /posts/:postId/comments/:commentId 删除一条留言
router.get('/:postId/comment/:commentId', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

module.exports = router;
