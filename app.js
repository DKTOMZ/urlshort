require('dotenv').config();

// import express package(commonJS syntax)
const express = require('express');

// instatiate the express app  
const app = express();
const dbconnect = require('./config/dbconfig');

dbconnect();

// Mounting middleware
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//Routing
app.use('/', require('./routes/redirect'));
app.use('/api', require('./routes/url'));
app.get('/', function(req,res) {
    res.sendFile(__dirname+'/views/index.html');    
});
app.get('*', function(req, res){
    res.render('error.html', {message:'Resource does not exist on server'});
  });

// Listen for incoming requests
app.listen(process.env.PORT, () => console.log(`Server started listening on PORT ${process.env.PORT}`));
