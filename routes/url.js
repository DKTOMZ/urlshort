//imports
const express = require('express');
const router = express.Router();
const Url = require('../models/UrlModel');
const dns = require('dns');
const shortId = require('shortid');
const baseUrl = 'https://url-short-uudq.onrender.com';

//for api post requests
router.post('/shorten/?', function(req,res) {
    let longUrl = req.body.url; let hostname = '';

    try {
        hostname = new URL(longUrl).hostname;
    } catch (error) {
        return res.status(400).json({error:'Invalid Url. Please supply well formatted url'});
    }

    dns.lookup(hostname, function(err,ip,fam) {
        if(err) {return res.status(400).json({error:'Invalid Url. Please supply valid existing url'});}

        Url.findOne({longUrl:longUrl}, function(err,data) {
            if (err) {return res.status(500).json({error:err});}

            if (data) {return res.json({original_url:data.longUrl, short_url:data.shortUrl});}

            let urlId = shortId.generate();

            let shortUrl = baseUrl + '/' + urlId;

            Url({urlId:urlId,longUrl:longUrl,shortUrl:shortUrl}).save()
            .then(()=>res.json({original_url:longUrl, short_url:shortUrl}))
            .catch((err)=>res.status(500).json({error:'Failed to shorten. Try again later'}));
        })
    });
});

//for post requests via web portal
router.post('/shorten', function(req,res) {
    let longUrl = req.body.url; let hostname = '';

    try {
        hostname = new URL(longUrl).hostname;
    } catch (error) {
        return res.render('error.html', {message:'Invalid Url. Please enter well formatted url'});
    }

    dns.lookup(hostname, function(err,ip,fam) {
        if(err) {return res.render('error.html', {message:'Invalid Url. Please enter valid existing url'});}

        Url.findOne({longUrl:longUrl}, function(err,data) {
            if (err) {return res.render('error.html', {message:err});}

            if (data) {return res.render('fin.html', {original_url:data.longUrl, short_url:data.shortUrl});}

            let urlId = shortId.generate();

            let shortUrl = baseUrl + '/' + urlId;

            Url({urlId:urlId,longUrl:longUrl,shortUrl:shortUrl}).save()
            .then(()=>res.render('fin.html', {original_url:longUrl, short_url:shortUrl}))
            .catch((err)=>res.render('error.html', {message:err}));
        })
    });
    
});

module.exports = router;