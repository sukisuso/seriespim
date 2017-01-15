/**
 * Jesús Juan Aguilar 2017
 * Loggin BO
 */
const co = require('co');
const handler = require('../helpers/error-express');
const userBll = require('../bll/userBll');
const crypt = require('../helpers/crypto');

function StartPaths(app){

    app.get('/logout', function(req, res) {
        req.session.destroy(function(err) {
            if(err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    });

    app.post('/api/signup', function(req, res) {
        co(function *() {
            var user = yield userBll.findOne(req.body.user);
            if (user) {
                res.send(false);	
            } else {
                var userLogged = yield userBll.save(req.body);
                sess=req.session;
                sess.user = userLogged;
                res.send(true);
            }
        }).catch(err =>{handler(res)});
    });

    // process the login form
    app.post('/api/login', function(req, res) {
        co(function *() {
            var user = yield userBll.findOne(req.body.user);
            if (user) {
                if (crypt.encrypt(req.body.password) === user.pasword){
                    sess=req.session;
                    sess.user = user;
                    res.send(user);
                } else {
                    res.send(false);
                }
            } else {
                res.send(false);
            }
        }).catch(err =>{handler(res, err)});
    });

    app.post('/api/isAuth', function(req, res){
        if (req.session.user) {
            res.send(req.session.user);
        }else {
            res.send(false);
        }
    });
}

exports.startPaths = StartPaths;
