const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/seriespim");
const ObjectId = mongoose.Types.ObjectId;
const URL = '/models';
const URL_REQ = './models/'
const fs = require('fs');

exports.getRepository = function (model) {
	return mongoose.model(model);
}

exports.loadRepositories  = function () {
	var files = fs.readdirSync(__dirname+ URL);
	files.forEach(file => {
	  console.log(URL_REQ + file.split('.')[0]);
	  require(URL_REQ + file.split('.')[0]);
	});
}

exports.id = function (id){
	return ObjectId(id);
}
