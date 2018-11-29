var express = require('express');
var router = express.Router();
const multer= require('multer');
var upload = multer();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/upload',upload.single('file'),function(req,res){
  if(req.file==null){
    res.redirect('/');
  }
  else {
    res.json({'File size: ': req.file.size ,'File name: ':req.file.originalname ,'Type: ':req.file.mimetype});
  }
})
module.exports = router;
