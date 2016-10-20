var mongoose = require('mongoose')
var User = mongoose.model('User')
module.exports = (function(){
	return{

		// looks for a user if it doesnt find one then creates one and then creates a user session
		login: function (req, res){
			User.findOne({name: req.body.name}, function(err, user){
				if (!user){
				var user = new User(req.body)
				user.save(function(err, data){
					if (err){
						return res.json({status: false})
					}
					else{
						req.session.user = data;
						req.session.save();
				
						return res.json({status: true, user : data})
					}


					
				});
			}
				else{
					req.session.user = user;
					req.session.save();
					
					return res.json({status: true, user: user})
				}

			})
		},

		// check to see if the user is in session. Useful to avoid people viewing pages besides login if they are not logged in
		checkUser: function (req, res){
			if(req.session.user){
				res.json({user: req.session.user})
			}
			else{
				res.json({user: null})
			}
		},

		// grabs one user based of the url parameter
		getUser: function(req, res){
			User.findOne({_id: req.params.id}, function(err, user){
				if (err){
					console.log(err)
				}
				else{
					console.log(user)
					res.json(user)
				}
			})
		},
		
		//a simple logout that log you out and destroys the session
		logout: function(req, res){
			req.session.destroy()
			res.redirect('/')
		}
}	
})(); //immediately invoked