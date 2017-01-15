var mongoose = require('mongoose');    

var Link = new mongoose.Schema({
    id: { type: String },
    link: { type: String }
});

mongoose.model('Link', Link);
