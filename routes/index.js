var express = require('express');
var jQuery = require('jquery');
var router = express.Router();
var call_to = require('../public/javascripts/ai_call.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Pokedex AI' });
});

router.get('/about', function(req, res) {
    res.render("about", {title: 'About'});
});

router.get('/pokechat', function(req, res) {
    if(Object.keys(req.query).length != 0 ){
      var temp = req.query.input_call;
      console.log(temp);
      var call_from = call_to(temp);
      console.log(call_from);
      res.end();//esto es temporal apra que no se recargue la solicitud.
    }else{
    res.render("pokechat", {title: 'Pokechat'});
  }
});

router.get('/contact', function(req, res) {
    res.render("name", {title: 'Contact'});
});

router.get('/process_post', function (req, res) {
   // Prepare output in JSON format
   http.get(req.body, function(req,res) {
     response ={ resp:req.body.defautl_response};
     console.log(response);
     res.end(JSON.stringify(response));
   });
});
module.exports = router;
