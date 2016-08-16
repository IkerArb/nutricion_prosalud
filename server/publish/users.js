Meteor.publish("all_users", function() {
	if(Users.isInRoles(this.userId, ["admin",])) {
		return Meteor.users.find({}, {});
	}
	return this.ready();
});
