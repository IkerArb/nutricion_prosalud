Meteor.publish("all_users", function() {
	if(Users.isInRoles(this.userId, ["admin",])) {
		return Meteor.users.find({}, {});
	}
	return this.ready();
});

Meteor.publish("info_user",function(idUser){
	if(Users.isInRoles(this.userId,["nutriologo"])&&Meteor.users.findOne({_id:idUser}).profile.nutriologo==this.userId){
		return Meteor.users.find({_id:idUser});
	}
	return this.ready();
});

Meteor.publish("nutriologo_users", function(){
	if(Users.isInRoles(this.userId,["nutriologo"])){
		return Meteor.users.find({"profile.nutriologo":this.userId});
	}
	return this.ready();
});
