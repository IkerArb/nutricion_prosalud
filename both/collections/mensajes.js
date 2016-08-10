this.Mensajes = new Mongo.Collection("Mensajes");

this.Mensajes.userCanInsert = function(userId, doc) {
	return Users.isInRoles(userId, ["user","nutriologo"]);
};

this.Mensajes.userCanUpdate = function(userId, doc) {
	return true;
};

this.Mensajes.userCanRemove = function(userId, doc) {
	return true;
};
