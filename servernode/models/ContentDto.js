var mongoose = require('mongoose');    

var Content = new mongoose.Schema({
    title: { type: String },
    _year_data: { type: String },
    year: {type: Number},
    rated: { type: String },
    released: {type: Date},
    runtime: { type: String },
    genres: { type: String },
    director: { type: String },
    writer: { type: String },
    actors: { type: String },
    plot: { type: String },
    languages: { type: String },
    country: { type: String },
    awards: { type: String },
    poster: { type: String },
    metascore: { type: String },
    rating: { type: String },
    votes: { type: String },
    imdbid: { type: String },
    type: { type: String },
    response: { type: String },
    imdburl: { type: String },
    series: {type: Boolean}
});

mongoose.model('Content', Content);
