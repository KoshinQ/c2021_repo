var express = require('express');
var router = express.Router();

var passport = require('passport'); // 追記

router.get('/', function(req, res, next) {
  res.render('index', { user : req.user});  // 編集
});

// 以下追記=========================================================
router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local', 
    {successRedirect: '/',
    failureRedirect: '/login',
    session: false}));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
// ここまで========================================================

module.exports = router;