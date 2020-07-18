var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies.color){
    res.render('index', {
      color: req.cookies.color
    })
  }else {
    res.render('index',{
      color: 'white'
    })
  }
})

router.post('/', function(req, res, next) {
  
  res.cookie('color', req.body.color, {'maxAge': 1000 * 60})
  
  res.render('index', {
    color: req.body.color
  }
  
  
  
  )})

module.exports = router;
