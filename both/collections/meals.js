this.Meals = new Mongo.Collection("Meals");

this.Meals.userCanInsert = function(userId, doc) {
	return Users.isInRoles(userId, ["user"]);
};

this.Meals.userCanUpdate = function(userId, doc) {
	return userId && doc.createdBy == userId;
};

this.Meals.userCanRemove = function(userId, doc) {
	return true;
};
