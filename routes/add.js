var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
	var newFriends = {'name': req.query.name, 'description': req.query.description, 'imageURL': 'http://lorempixel.com/500/500/people'};
	data["friends"].push(newFriends);
	console.log(newFriends);
	res.render('add',data);
}