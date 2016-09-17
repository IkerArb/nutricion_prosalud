import {coloresTarjetas} from "/both/lib/coloresTarjetas.js";

Template.HomeUser.rendered = function() {
	$('.carousel.carousel-slider').carousel({full_width: true,time_constant:400});
	$(".menu-details").hide();
	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
		max: Date.now(),
		min: -7
	});
	var today = new Date();
	var month;
	switch (today.getMonth()) {
    case 0:
        month = " January";
        break;
    case 1:
        month = " February";
        break;
    case 2:
        month = " March";
        break;
    case 3:
        month = " April";
        break;
    case 4:
        month = " May";
        break;
    case 5:
        month = " June";
        break;
    case 6:
        month = " July";
				break;
		case 7:
        month = " August";
        break;
    case 8:
        month = " September";
        break;
    case 9:
        month = " October";
        break;
    case 10:
        month = " November";
        break;
    case 11:
        month = " December";
	}
	$('.datepicker').val(today.getDate()+month+","+today.getFullYear());
	$(".picker__day--today").addClass("picker__day--selected picker__day--highlighted");
	$(".picker__day--today").attr("aria-selected",true);
	$(".picker__day--today").attr("aria-activedescendant",true);
	Session.set('dateSelected',new Date($('.datepicker').val()));
	// console.log(Date().toString());
	// $('.datepicker').val(Date().toString());
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
	},
	'click .comer-desayuno': function(e){
		var fecha = new Date($('.datepicker').val());
		Meteor.call('comerDesayuno',fecha,this.titulo,this.detalle,Meteor.userId());
	},
	'click .comer-media-mañana': function(e){
		var fecha = new Date($('.datepicker').val());
		Meteor.call('comerMediaMañana',fecha,this.titulo,this.detalle,Meteor.userId());
	},
	'click .comer-comida': function(e){
		var fecha = new Date($('.datepicker').val());
		Meteor.call('comerComida',fecha,this.titulo,this.detalle,Meteor.userId());
	},
	'click .comer-media-tarde': function(e){
		var fecha = new Date($('.datepicker').val());
		Meteor.call('comerMediaTarde',fecha,this.titulo,this.detalle,Meteor.userId());
	},
	'click .comer-cena': function(e){
		var fecha = new Date($('.datepicker').val());
		Meteor.call('comerCena',fecha,this.titulo,this.detalle,Meteor.userId());
	},
	'click .comer-otro-desayuno': function(e){
		var fecha = new Date($('.datepicker').val());
		Meteor.call('comerDesayuno',fecha,"Otro",$("#otro-desayuno").val(),Meteor.userId());
	},
	'click .comer-otro-media-mañana': function(e){
		var fecha = new Date($('.datepicker').val());
		Meteor.call('comerMediaMañana',fecha,"Otro",$("#otro-media-mañana").val(),Meteor.userId());
	},
	'click .comer-otro-comida': function(e){
		var fecha = new Date($('.datepicker').val());
		Meteor.call('comerComida',fecha,"Otro",$("#otro-comida").val(),Meteor.userId());
	},
	'click .comer-otro-media-tarde': function(e){
		var fecha = new Date($('.datepicker').val());
		Meteor.call('comerMediaTarde',fecha,"Otro",$("#otro-media-tarde").val(),Meteor.userId());
	},
	'click .comer-otro-cena': function(e){
		var fecha = new Date($('.datepicker').val());
		Meteor.call('comerCena',fecha,"Otro",$("#otro-cena").val(),Meteor.userId());
	},
	'change .datepicker': function(e){
		Session.set('dateSelected',new Date($('.datepicker').val()));
	}
});

Template.HomeUser.helpers({
	racionDesayuno: function(){
		return Meteor.user().profile.menu.desayuno.racion;
	},
	racionMediaMañana: function(){
		return Meteor.user().profile.menu.media_mañana.racion;
	},
	racionComida: function(){
		return Meteor.user().profile.menu.comida.racion;
	},
	racionMediaTarde: function(){
		return Meteor.user().profile.menu.media_tarde.racion;
	},
	racionCena: function(){
		return Meteor.user().profile.menu.cena.racion;
	},
	platillosDesayuno: function(){
		var platillos = Meteor.user().profile.menu.desayuno.platillos;
		var platillosArray = [];
		var count=0;
		for(var i in platillos){
			platillosArray =  platillosArray.concat({_id:i,titulo:platillos[i].titulo,detalle:platillos[i].detalle,count:count%6});
			count+=1;
		}
		Session.set('countPlatillosDesayuno',count);
		return platillosArray;
	},
	platillosMediaMañana: function(){
		var platillos = Meteor.user().profile.menu.media_mañana.platillos;
		var platillosArray = [];
		var count=0;
		for(var i in platillos){
			platillosArray =  platillosArray.concat({_id:i,titulo:platillos[i].titulo,detalle:platillos[i].detalle,count:count%6});
			count+=1;
		}
		Session.set('countPlatillosMediaMañana',count);
		return platillosArray;
	},
	platillosComida: function(){
		var platillos = Meteor.user().profile.menu.comida.platillos;
		var platillosArray = [];
		var count=0;
		for(var i in platillos){
			platillosArray =  platillosArray.concat({_id:i,titulo:platillos[i].titulo,detalle:platillos[i].detalle,count:count%6});
			count+=1;
		}
		Session.set('countPlatillosComida',count);
		return platillosArray;
	},
	platillosMediaTarde: function(){
		var platillos = Meteor.user().profile.menu.media_tarde.platillos;
		var platillosArray = [];
		var count=0;
		for(var i in platillos){
			platillosArray =  platillosArray.concat({_id:i,titulo:platillos[i].titulo,detalle:platillos[i].detalle,count:count%6});
			count+=1;
		}
		Session.set('countPlatillosMediaTarde',count);
		return platillosArray;
	},
	platillosCena: function(){
		var platillos = Meteor.user().profile.menu.cena.platillos;
		var platillosArray = [];
		var count=0;
		for(var i in platillos){
			platillosArray =  platillosArray.concat({_id:i,titulo:platillos[i].titulo,detalle:platillos[i].detalle,count:count%6});
			count+=1;
		}
		Session.set('countPlatillosCena',count);
		return platillosArray;
	},
	colorTarjeta: function(){
		return coloresTarjetas[this.count];
	},
	classDesayunoRegistrado: function(){
		if(Meals.findOne({fecha:Session.get('dateSelected')}).desayuno){
			return 'grey';
		}
	},
	classMediaMañanaRegistrado: function(){
		if(Meals.findOne({fecha:Session.get('dateSelected')}).media_mañana){
			return 'grey';
		}
	},
	classComidaRegistrado: function(){
		if(Meals.findOne({fecha:Session.get('dateSelected')}).comida){
			return 'grey';
		}
	},
	classMediaTardeRegistrado: function(){
		if(Meals.findOne({fecha:Session.get('dateSelected')}).media_tarde){
			return 'grey';
		}
	},
	classCenaRegistrado: function(){
		if(Meals.findOne({fecha:Session.get('dateSelected')}).cena){
			return 'grey';
		}
	},
	iconDesayunoRegistrado: function(){
		if(Meals.findOne({fecha:Session.get('dateSelected')}).desayuno){
			return true;
		}
	},
	iconMediaMañanaRegistrado: function(){
		if(Meals.findOne({fecha:Session.get('dateSelected')}).media_mañana){
			return true;
		}
	},
	iconComidaRegistrado: function(){
		if(Meals.findOne({fecha:Session.get('dateSelected')}).comida){
			return true;
		}
	},
	iconMediaTardeRegistrado: function(){
		if(Meals.findOne({fecha:Session.get('dateSelected')}).media_tarde){
			return true;
		}
	},
	iconCenaRegistrado: function(){
		if(Meals.findOne({fecha:Session.get('dateSelected')}).cena){
			return true;
		}
	}
});
