Mensajes.allow({
	insert: function (userId, doc) {
		return Mensajes.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return Mensajes.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return Mensajes.userCanRemove(userId, doc);
	}
});

Mensajes.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;
	doc.modifiedAt = doc.createdAt;
	doc.modifiedBy = doc.createdBy;

	
	if(!doc.createdBy) doc.createdBy = userId;
});

Mensajes.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Mensajes.before.remove(function(userId, doc) {
	
});

Mensajes.after.insert(function(userId, doc) {
	
});

Mensajes.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Mensajes.after.remove(function(userId, doc) {
	
});
