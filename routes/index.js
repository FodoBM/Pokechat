var express = require('express');
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

router.post('/process_post', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

module.exports = router;
