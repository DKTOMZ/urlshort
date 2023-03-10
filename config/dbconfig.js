//import mongoose db package
const mongoose = require('mongoose');

//connect to our remote mongoose db
const dbconnect = function() {
    mongoose.connect(
        process.env.MONGO_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, 
        function(err){
        if (err) {console.log(err);}
        else {console.log('MongoDB connected');}
        }
    );   
}

//export dbconnect function
module.exports = dbconnect;



