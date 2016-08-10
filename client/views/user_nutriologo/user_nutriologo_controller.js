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
			Meteor.subscribe("estudios_user_nutriologo")
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
			estudios_user_nutriologo: Estudios.find({}, {})
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});