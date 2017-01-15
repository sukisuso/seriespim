/**
*   Jesús Juan Aguilar - LoginBll 
*	01/2017
*/

var datapool = require('./../datapool');
var contentModel = datapool.getRepository('Content');

exports.findOne = findOne;
exports.save = save;
exports.find = find;

function findOne(id) {
	  return contentModel.findOne({'imdbid': id})
	  				  .lean().exec();
}

function save(dto) {
	var sv = new contentModel(dto);
	return sv.save();
}

function find(name, limit){
	  return contentModel.find({title :  new RegExp(name, "i")})
	  					  .limit(limit)
						  .sort({rating:-1})
						  .lean().exec();
}