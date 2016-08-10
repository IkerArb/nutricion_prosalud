Estudios.allow({
	insert: function (userId, doc) {
		return Estudios.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return Estudios.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return Estudios.userCanRemove(userId, doc);
	}
});

Estudios.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;
	doc.modifiedAt = doc.createdAt;
	doc.modifiedBy = doc.createdBy;

	
	if(!doc.idUser) doc.idUser = userId;
});

Estudios.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Estudios.before.remove(function(userId, doc) {
	
});

Estudios.after.insert(function(userId, doc) {
	
});

Estudios.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Estudios.after.remove(function(userId, doc) {
	
});
