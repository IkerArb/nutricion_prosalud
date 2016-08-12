Template.HomeUser.rendered = function() {
	$('.carousel.carousel-slider').carousel({full_width: true,time_constant:400});
	$(".menu-details").hide();
};

Template.HomeUser.events({
	'click .desayuno-link': function(e){
		$("#desayuno").removeClass("m6",600);
		$("#desayuno-details").show(600);
		$(".desayuno-link").addClass("desayuno-close");
		$(".desayuno-link").removeClass("desayuno-link");
		$(".desayuno .card").addClass("no-margin-bottom");
	},
	'click .media-manana-link': function(e){
		$("#media-manana").removeClass("m6",600);
		$("#media-manana-details").show(600);
		$(".media-manana-link").addClass("media-manana-close");
		$(".media-manana-link").removeClass("media-manana-link");
		$(".media-manana .card").addClass("no-margin-bottom");
	},
	'click .comida-link': function(e){
		$("#comida").removeClass("m6",600);
		$("#comida-details").show(600);
		$(".comida-link").addClass("comida-close");
		$(".comida-link").removeClass("comida-link");
		$(".comida .card").addClass("no-margin-bottom");
	},
	'click .media-tarde-link': function(e){
		$("#media-tarde").removeClass("m6",600);
		$("#media-tarde-details").show(600);
		$(".media-tarde-link").addClass("media-tarde-close");
		$(".media-tarde-link").removeClass("media-tarde-link");
		$(".media-tarde .card").addClass("no-margin-bottom");
	},
	'click .cena-link': function(e){
		$("#cena").removeClass("m6",600);
		$("#cena-details").show(600);
		$(".cena-link").addClass("cena-close");
		$(".cena-link").removeClass("cena-link");
		$(".cena .card").addClass("no-margin-bottom");
	},
	'click .desayuno-close': function(e){
		$("#desayuno-details").hide(600);
		$(".desayuno-close").addClass("desayuno-link");
		$(".desayuno-close").removeClass("desayuno-close");
		$("#desayuno").addClass("m6",600);
		$(".desayuno .card").removeClass("no-margin-bottom");
	},
	'click .media-manana-close': function(e){
		$("#media-manana-details").hide(600);
		$(".media-manana-close").addClass("media-manana-link");
		$(".media-manana-close").removeClass("media-manana-close");
		$("#media-manana").addClass("m6",600);
		$(".media-manana .card").removeClass("no-margin-bottom");
	},
	'click .comida-close': function(e){
		$("#comida-details").hide(600);
		$(".comida-close").addClass("comida-link");
		$(".comida-close").removeClass("comida-close");
		$("#comida").addClass("m6",600);
		$(".comida .card").removeClass("no-margin-bottom");
	},
	'click .media-tarde-close': function(e){
		$("#media-tarde-details").hide(600);
		$(".media-tarde-close").addClass("media-tarde-link");
		$(".media-tarde-close").removeClass("media-tarde-close");
		$("#media-tarde").addClass("m6",600);
		$(".media-tarde .card").removeClass("no-margin-bottom");
	},
	'click .cena-close': function(e){
		$("#cena-details").hide(600);
		$(".cena-close").addClass("cena-link");
		$(".cena-close").removeClass("cena-close");
		$("#cena").addClass("m6",600);
		$(".cena .card").removeClass("no-margin-bottom");
	}
});

Template.HomeUser.helpers({

});
