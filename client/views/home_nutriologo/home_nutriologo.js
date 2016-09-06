Template.HomeNutriologo.rendered = function() {

};

Template.HomeNutriologo.events({

});

Template.HomeNutriologo.helpers({
	pacientes: function(){
		return Meteor.users.find({"profile.nutriologo":Meteor.userId()});
	},
	userPath: function(){
		return "/user_nutriologo/"+this._id;
	}
});
