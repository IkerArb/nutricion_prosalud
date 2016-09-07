Template.layout.rendered = function() {
	// scroll to anchor
	$('body').on('click', 'a', function(e) {
		var href = $(this).attr("href");
		if(!href) {
			return;
		}
		if(href.length > 1 && href.charAt(0) == "#") {
			var hash = href.substring(1);
			if(hash) {
				e.preventDefault();

				var offset = $('*[id="' + hash + '"]').offset();

				if (offset) {
					$('html,body').animate({ scrollTop: offset.top - 60 }, 400);
				}
			}
		} else {
			if(href.indexOf("http://") != 0 && href.indexOf("https://") != 0 && href.indexOf("#") != 0) {
				$('html,body').scrollTop(0);
			}
		}
	});
	/*TEMPLATE_RENDERED_CODE*/
};


Template.PrivateLayoutLeftMenu.rendered = function() {
	$(".dropdown-button").dropdown();

};

Template.PrivateLayoutLeftMenu.events({
	"click .toggle-text": function(e, t) {
		e.preventDefault();
		$(e.target).closest("ul").toggleClass("menu-hide-text");
	}

});

Template.PrivateLayoutLeftMenu.helpers({
	homeLink: function(){
		if(Meteor.user()){
			if(Meteor.user().roles.indexOf('admin')>=0){
				return '/home_admin';
			}
			if(Meteor.user().roles.indexOf('nutriologo')>=0){
				return '/home_nutriologo';
			}
			return '/home_user';
		}
	}
});

Template.PrivateLayoutRightMenu.rendered = function() {
	$(".dropdown-button").dropdown();

};

Template.PrivateLayoutRightMenu.events({
	"click .toggle-text": function(e, t) {
		e.preventDefault();
		$(e.target).closest("ul").toggleClass("menu-hide-text");
	},
	"click #logout": function(e){
		e.preventDefault();
		Meteor.logout();
	}
});

Template.PrivateLayoutRightMenu.helpers({

});
