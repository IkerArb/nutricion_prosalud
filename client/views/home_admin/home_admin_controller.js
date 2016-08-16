this.HomeAdminController = RouteController.extend({
	template: "HomeAdmin",


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
			Meteor.subscribe("all_users")
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
			all_users: Users.find({}, {})
		};




		return data;
	},

	onAfterAction: function() {

	}
});
