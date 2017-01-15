/**
 * Jesús Juan Aguilar 2017
 * Loggin BO
 */
const co = require('co');
const handler = require('../helpers/error-express');
const imdb = require('imdb-api');
const contentBll = require('../bll/contentBll');

function StartPaths(app){

    app.post('/api/content', function(req, res) {
        co(function *() {
            var exist = yield contentBll.findOne(req.body.imbdid);
            if (!exist) {
                 var newContent = yield imdb.getById(req.body.imbdid);
                 if(newContent) 
                    contentBll.save(newContent);
                 res.send(newContent);
            } else {
                res.send(exist);
            }
        }).catch(err =>{handler(res)});
    });


     app.get('/api/content', function(req, res) {
        co(function *() {
            var name =  req.query.q ? req.query.q : '';
            var content = yield contentBll.find(name, 10);
            res.send(content);
        }).catch(err =>{handler(res)});
    });

    app.get('/api/actor', function(req, res) {
        co(function *() {
            var newContent = yield imdb.getById('nm0000115');
            res.send(newContent);
        }).catch(err =>{handler(res)});
    });
}

exports.startPaths = StartPaths;
