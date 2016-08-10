Meteor.publish("meals_current_user", function() {
	if(Users.isInRoles(this.userId, ["nutriologo"])) {
		return Meals.find({}, {});
	}
	return Meals.find({createdBy:this.userId}, {});
});

Meteor.publish("meals_user_nutriologo", function() {
	if(Users.isInRoles(this.userId, ["nutriologo"])) {
		return Meals.find({}, {});
	}
	return Meals.find({createdBy:this.userId}, {});
});

