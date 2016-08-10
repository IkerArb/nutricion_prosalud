var pageSession = new ReactiveDict();

Template.PerfilProfile.rendered = function() {
	
};

Template.PerfilProfile.events({
	
});

Template.PerfilProfile.helpers({
	
});

Template.PerfilProfileEditForm.rendered = function() {
	

	$('select').material_select();
	Materialize.updateTextFields();

	pageSession.set("perfilProfileEditFormInfoMessage", "");
	pageSession.set("perfilProfileEditFormErrorMessage", "");

	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format");

		if(format) {
			format = format.toLowerCase();
		}
		else {
			format = "mm/dd/yyyy";
		}

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

//	$("select[data-role='tagsinput']").tagsinput();
	$(".bootstrap-tagsinput").addClass("form-control");
	$("input[autofocus]").focus();
};

Template.PerfilProfileEditForm.events({
	"click #form-submit-button": function(e, t) {
		e.preventDefault();
		$(".form_PerfilProfileEditForm").submit();
	},
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("perfilProfileEditFormInfoMessage", "");
		pageSession.set("perfilProfileEditFormErrorMessage", "");

		var self = this;

		function submitAction(msg) {
			var perfilProfileEditFormMode = "update";
			if(!t.find("#form-cancel-button")) {
				switch(perfilProfileEditFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("perfilProfileEditFormInfoMessage", message);
					}; break;
				}
			}

			Router.go("user_settings.profile", {});
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("perfilProfileEditFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				Meteor.call("updateUserAccount", t.data.current_user_data._id, values, function(e) { if(e) errorAction(e); else submitAction(); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		/*CANCEL_REDIRECT*/
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		/*CLOSE_REDIRECT*/
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		/*BACK_REDIRECT*/
	}

	
});

Template.PerfilProfileEditForm.helpers({
	"infoMessage": function() {
		return pageSession.get("perfilProfileEditFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("perfilProfileEditFormErrorMessage");
	}
	
});
