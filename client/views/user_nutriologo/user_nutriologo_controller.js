this.UserNutriologoController = RouteController.extend({
	template: "UserNutriologo",


	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("loading"); }
		/*ACTION_FUNCTION*/
	},

	isReady: function() {


		var subs = [
			Meteor.subscribe("estudios_user_nutriologo"),
			Meteor.subscribe("info_user",this.params._id),
			Meteor.subscribe("meals_current_user")
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},

	data: function() {


		var data = {
			params: this.params || {},
			estudios_user_nutriologo: Estudios.find({}, {}),
			info_user: Meteor.users.findOne(),
			meals: Meals.find()
		};




		return data;
	},

	onAfterAction: function() {

	}
});
