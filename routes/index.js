var express = require('express');
var jQuery = require('jquery');
var axios = require('axios');
var router = express.Router();
var call_to = require('../public/javascripts/ai_call.js');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Pokedex AI' });
});

router.get('/about', function(req, res) {
    res.render("about", {title: 'About'});
});

router.get('/pokechat', function(req, res) {
    res.render("pokechat", {title: 'Pokechat'});
});

router.get('/contact', function(req, res) {
    res.render("name", {title: 'Contact'});
});

module.exports = router;
