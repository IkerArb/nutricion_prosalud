this.PerfilController = RouteController.extend({
	template: "Perfil",


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
			Meteor.subscribe("current_user_data"),
			Meteor.subscribe("estudios_current_user")
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
			estudios: Estudios.find()
		};




		return data;
	},

	onAfterAction: function() {

	}
});
