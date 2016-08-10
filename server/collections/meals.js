Meals.allow({
	insert: function (userId, doc) {
		return Meals.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return Meals.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return Meals.userCanRemove(userId, doc);
	}
});

Meals.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;
	doc.modifiedAt = doc.createdAt;
	doc.modifiedBy = doc.createdBy;

	
	if(!doc.createdBy) doc.createdBy = userId;
});

Meals.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Meals.before.remove(function(userId, doc) {
	
});

Meals.after.insert(function(userId, doc) {
	
});

Meals.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Meals.after.remove(function(userId, doc) {
	
});
