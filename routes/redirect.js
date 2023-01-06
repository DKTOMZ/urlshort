//imports
const express = require('express');
const router = express.Router();
const Url = require('../models/UrlModel');

//redirect get request at shortened url to original url
router.get('/:shorturl', function(req,res) {
    Url.findOne(
        {urlId:req.params.shorturl},

        function(err,data) {
            if (data) {return res.redirect(data.longUrl);}

            if (err) {return res.render('error.html', {message:err});}
            
            return res.render('error.html', {message:"NO URL FOUND"});
        }
    );
  }
);

module.exports = router;