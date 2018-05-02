var express = require('express');
var jQuery = require('jquery');
var router = express.Router();

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
    res.render("contact", {title: 'Contact'});
});

router.post('/get_pokemon', function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.body.pokemon_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

module.exports = router;
