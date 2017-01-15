var mongoose = require('mongoose');    

var Chapter = new mongoose.Schema({
    title: { type: String },
    idContent: { type: String },
    season: {type: Number},
    number: {type: Number}
});

mongoose.model('Chapter', Chapter);
