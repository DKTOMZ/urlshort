const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
    urlId: {type: String, required: true},
    longUrl: {type: String, required: true},
    shortUrl: {type: String, required: true}
})

module.exports = mongoose.model('urls',UrlSchema);