/*
 * Router 
 * Jesús Juan Aguilar 12/2016
 * */
var datapool = require('./datapool');

 
function route(app) {
    datapool.loadRepositories();

    app.get('*', function(req, res){
        res.redirect('/');
    });
}

exports.redirect = route;