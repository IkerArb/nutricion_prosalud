Template.Perfil.rendered = function() {
	
};

Template.Perfil.events({
	
});

Template.Perfil.helpers({
	
});

Template.PerfilSideMenu.rendered = function() {
	$(".dropdown-button").dropdown();
	
};

Template.PerfilSideMenu.events({
	"click .toggle-text": function(e, t) {
		e.preventDefault();
		$(e.target).closest("ul").toggleClass("menu-hide-text");
	}
	
});

Template.PerfilSideMenu.helpers({
	
});
