Meteor.publish("estudios_user_nutriologo", function() {
	if(Users.isInRoles(this.userId, ["nutriologo"])) {
		return Estudios.find({}, {});
	}
	return Estudios.find({paciente:this.userId}, {});
});

Meteor.publish("estudios_current_user", function() {
	if(Users.isInRoles(this.userId, ["nutriologo"])) {
		return Estudios.find({}, {});
	}
	return Estudios.find({paciente:this.userId}, {});
});
