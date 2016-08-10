this.Estudios = new Mongo.Collection("Estudios");

this.Estudios.userCanInsert = function(userId, doc) {
	return Users.isInRoles(userId, ["nutriologo"]);
};

this.Estudios.userCanUpdate = function(userId, doc) {
	return userId && Users.isInRoles(userId, ["nutriologo"]);
};

this.Estudios.userCanRemove = function(userId, doc) {
	return true;
};
