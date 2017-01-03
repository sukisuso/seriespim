/*
 * Config.Express 
 * Jesús Juan Aguilar 12/2016
 * */
var bodyParser    = require('body-parser');
var helmet        = require('helmet');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var passport      = require('passport');
var morgan        = require('morgan');
var PUBLIC_URL    = __dirname + '/../public';
var NMODULES_URL  = __dirname+ '/../node_modules';
var TEMPLATES_URL = __dirname+ '/../templates';

exports.build = function (app, express) {

    app.use(express.static(PUBLIC_URL));
    app.use("/node_modules", express.static(NMODULES_URL));
    app.use("/templates", express.static(TEMPLATES_URL));
    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(helmet());
    app.use(bodyParser.json());  
    app.use(bodyParser.urlencoded({ 
        extended: true
    }));

    app.use(session({ secret: 'passport-default-seriesPim-' })); 

    app.disable('x-powered-by');
    
    return app;
}