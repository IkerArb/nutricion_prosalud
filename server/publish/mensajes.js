Meteor.publish("mensajes", function() {
	if(Users.isInRoles(this.userId, ["user","nutriologo"])) {
		return Mensajes.find({}, {});
	}
	return this.ready();
});

