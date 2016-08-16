Template.HomeAdmin.rendered = function() {
	// Jquery Iniciadores tooltip modal y dropdown select
	$('.tooltipped').tooltip({delay: 50});
	$('.modal-trigger').leanModal();
	$('select').material_select();
	// Fin jquery Iniciadores

};

Template.HomeAdmin.events({

	// Creacion de users
	'click #createUserButton':function(event){
		event.preventDefault();
		var name = $('#nombreUser').val();
		var email = $('#emailUser').val();
		var password = $('#passwordUser').val();
		var birthDay = $('#fechaNacimiento').val();
		var nutriologo = $('#selectNutriologo').val();
		var roles  = [];
		if ($('#roleAdmin').prop('checked')) {
			roles.push('admin');
		}
		if ($('#roleNutriologo').prop('checked')) {
			roles.push('nutriologo');
		}
		if ($('#roleUser').prop('checked')) {
			roles.push('user');
		}
		if (roles.length > 0) {
			console.log('crear usuario'+name);
			Meteor.call('crearUsuario',name,email,password,birthDay,nutriologo,roles);
			sAlert.success(name+'se ha dado de alta');
		}
		else {
			sAlert.error('Debes asignar al menos un rol al usuario');
		}

	},
	// Fin creacion users

	// Cambio de Roles en Tabla Users
	'click .changeRoleUser':function (event) {
		var userId=this._id;
		var name = this.profile.name;
		var checked = $('#'+userId+'_changeRoleUser').prop('checked');
		console.log(checked);
		if (checked === true) {
			Meteor.call('addUserRole',userId);
			sAlert.success(name+' ahora tiene Rol de Paciente');
		} else {
			Meteor.call('removeUserRole',userId);
			sAlert.warning(name+' ya no tiene Rol de Paciente');
		}
	},

	'click .changeRoleNutriologo':function (event) {
		var userId=this._id;
		var name = this.profile.name;
		var checked = $('#'+userId+'_changeRoleNutriologo').prop('checked');
		console.log(checked);
		if (checked === true) {
			Meteor.call('addNutriologoRole',userId);
			sAlert.success(name+' ahora tiene Rol de Nutriologo');
		} else {
			Meteor.call('removeNutriologoRole',userId);
			sAlert.warning(name+' ya no tiene Rol de Nutriolgo');
		}
	},

	'click .changeRoleAdmin':function (event) {
		var userId=this._id;
		var name = this.profile.name;
		var checked = $('#'+userId+'_changeRoleAdmin').prop('checked');
		console.log(checked);
		if (Meteor.userId()!= userId) {
			if (checked === true) {
				Meteor.call('addAdminRole',userId);
				sAlert.success(name+' ahora tiene Rol de Admin');
			} else {
				Meteor.call('removeAdminRole',userId);
				sAlert.warning(name+' ya no tiene Rol de Admin');
			}
		} else {
			sAlert.error('No puedes remover tu propio Rol de Admin');
			$('#'+userId+'_changeRoleAdmin').prop('checked',true);
		}
	},
	// Fin camio de roles

	// Cambio de nombre desde tabla user
	'change .changeName':function(){
		var userId=this._id;
		console.log(this.profile.name);
		var newName=$('#'+userId+'_name').val();
		Meteor.call('changeName',userId,newName);
		sAlert.success('Se han guardado tus cambios');
	},

	// Cambio de email desde tabla user
	'change .changeEmail':function(){
		var userId=this._id;
		console.log(this.profile.email);
		var newEmail=$('#'+userId+'_email').val();
		Meteor.call('changeEmail',userId,newEmail);
		sAlert.success('Se cambio correo a '+ this.profile.name);
	},

	// Cambio de fecha de nacimiento desde tabla user
	'change .changeBirthDay': function(){
		var userId=this._id;
		console.log(this.profile.birthDay);
		var newBirthDay=$('#'+userId+'_birthDay').val();
		Meteor.call('changeBirthDay',userId,newBirthDay);
		sAlert.success('Se cambio fecha de nacimiento de '+this.profile.name);
	}
});

Template.HomeAdmin.helpers({
	users:function(){
		return Meteor.users.find().fetch();
	},
	nutriologo:function(){
		return Meteor.users.find({roles:{$in:['nutriologo']}}).fetch();
	},

	// Manda parametros a checkbox de tabla Users si el Rol esta asignado actualmente

	isUser:function(){
		var user = this._id;
		var role = Meteor.users.findOne({_id:user}).roles;
		if (role.indexOf('user')!=-1) {
			return {
				checked:"checked"
			};
		} else {
			return "";
		}
	},
	isNutriologo:function(){
		var user = this._id;
		var role = Meteor.users.findOne({_id:user}).roles;
		if (role.indexOf("nutriologo")!=-1) {
			return {
				checked:"checked"
			};
		} else {
			return "";
		}
	},
	isAdmin:function(){
		var user = this._id;
		var role = Meteor.users.findOne({_id:user}).roles;
		if (role.indexOf('admin')!=-1) {
			return {
				checked:"checked"
			};
		} else {
			return "";
		}
	},

	// Fin de parametros checkbox


});
