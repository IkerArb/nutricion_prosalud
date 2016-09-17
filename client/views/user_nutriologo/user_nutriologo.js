Template.UserNutriologo.rendered = function() {
	$('ul.tabs').tabs();
	$('.tooltipped').tooltip({delay: 50});
};

Template.UserNutriologo.events({

});

Template.UserNutriologo.helpers({
	name:function(){
	  return Meteor.users.findOne({_id:this.params._id}).profile.name;
  },
});

Template.PerfilUserNutriologo.rendered = function() {
};

Template.PerfilUserNutriologo.events({

});

Template.PerfilUserNutriologo.helpers({
  createChart: function () {
    var Highcharts = require('highcharts');
      // Gather data:

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart', {
          title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
  });
  },
  createChart0: function () {
    var Highcharts = require('highcharts');
      // Gather data:

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart0', {
          title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }]
    });
  });
  },
  createChart1: function () {
    var Highcharts = require('highcharts');
      // Gather data:

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart1', {
          title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [ {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
  });
  },
  createChart2: function () {
    var Highcharts = require('highcharts');
      // Gather data:

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart2', {
          title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }]
    });
  });
  },
  createChart3: function () {
    var Highcharts = require('highcharts');
      // Gather data:

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart3', {
          title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
  });
  },

  fechaNacimiento:function(){
  // return Meteor.user().profile.fechaNacimiento
  return new Date();
  }

});



Template.PerfilUserMenu.rendered = function(){
	$('.collapsible').collapsible();
	$('.materialize-textarea').trigger('autoresize');

};

Template.PerfilUserMenu.helpers({
	racionDesayuno: function(){
		return Meteor.users.findOne({_id: this.params._id}).profile.menu.desayuno.racion;
	},
	platillosDesayuno: function(){
		var platillos = Meteor.users.findOne({_id: this.params._id}).profile.menu.desayuno.platillos;
		var platillosArray = [];
		for(var i in platillos){
			platillosArray =  platillosArray.concat({_id:i,titulo:platillos[i].titulo,detalle:platillos[i].detalle});
		}
		return platillosArray;
	},
	racionMediaMañana: function(){
		return Meteor.users.findOne({_id: this.params._id}).profile.menu.media_mañana.racion;
	},
	platillosMediaMañana: function(){
		var platillos = Meteor.users.findOne({_id: this.params._id}).profile.menu.media_mañana.platillos;
		var platillosArray = [];
		for(var i in platillos){
			platillosArray =  platillosArray.concat({_id:i,titulo:platillos[i].titulo,detalle:platillos[i].detalle});
		}
		return platillosArray;
	},
	racionComida: function(){
		return Meteor.users.findOne({_id: this.params._id}).profile.menu.comida.racion;
	},
	platillosComida: function(){
		var platillos = Meteor.users.findOne({_id: this.params._id}).profile.menu.comida.platillos;
		var platillosArray = [];
		for(var i in platillos){
			platillosArray =  platillosArray.concat({_id:i,titulo:platillos[i].titulo,detalle:platillos[i].detalle});
		}
		return platillosArray;
	},
	racionMediaTarde: function(){
		return Meteor.users.findOne({_id: this.params._id}).profile.menu.media_tarde.racion;
	},
	platillosMediaTarde: function(){
		var platillos = Meteor.users.findOne({_id: this.params._id}).profile.menu.media_tarde.platillos;
		var platillosArray = [];
		for(var i in platillos){
			platillosArray =  platillosArray.concat({_id:i,titulo:platillos[i].titulo,detalle:platillos[i].detalle});
		}
		return platillosArray;
	},
	racionCena: function(){
		return Meteor.users.findOne({_id: this.params._id}).profile.menu.cena.racion;
	},
	platillosCena: function(){
		var platillos = Meteor.users.findOne({_id: this.params._id}).profile.menu.cena.platillos;
		var platillosArray = [];
		for(var i in platillos){
			platillosArray =  platillosArray.concat({_id:i,titulo:platillos[i].titulo,detalle:platillos[i].detalle});
		}
		return platillosArray;
	},
});

Template.PerfilUserMenu.events({
	'click #boton-nuevo-desayuno': function(e){
		$("#forma-nuevo-desayuno").removeClass('hide');
	},
	'click #boton-nuevo-media-mañana': function(e){
		$("#forma-nuevo-media-mañana").removeClass('hide');
	},
	'click #boton-nuevo-comida': function(e){
		$("#forma-nuevo-comida").removeClass('hide');
	},
	'click #boton-nuevo-media-tarde': function(e){
		$("#forma-nuevo-media-tarde").removeClass('hide');
	},
	'click #boton-nuevo-cena': function(e){
		$("#forma-nuevo-cena").removeClass('hide');
	},
	'click #send-nuevo-desayuno': function(e){
		var titulo = $("#titulo-plat-desayuno").val();
		var detalle = $("#detalle-plat-desayuno").val();
		Meteor.call("agregaPlatilloDesayuno",this.params._id,titulo,detalle);
		$("#forma-nuevo-desayuno").addClass('hide');
		sAlert.success(titulo+'se ha dado de alta en desayuno');

	},
	'click #send-nuevo-media-mañana': function(e){
		var titulo = $("#titulo-plat-media-mañana").val();
		var detalle = $("#detalle-plat-media-mañana").val();
		Meteor.call("agregaPlatilloMediaMañana",this.params._id,titulo,detalle);
		$("#forma-nuevo-media-mañana").addClass('hide');
		sAlert.success(titulo+'se ha dado de alta en media mañana');
	},
	'click #send-nuevo-comida': function(e){
		var titulo = $("#titulo-plat-comida").val();
		var detalle = $("#detalle-plat-comida").val();
		Meteor.call("agregaPlatilloComida",this.params._id,titulo,detalle);
		$("#forma-nuevo-comida").addClass('hide');
		sAlert.success(titulo+'se ha dado de alta en comida');
	},
	'click #send-nuevo-media-tarde': function(e){
		var titulo = $("#titulo-plat-media-tarde").val();
		var detalle = $("#detalle-plat-media-tarde").val();
		Meteor.call("agregaPlatilloMediaTarde",this.params._id,titulo,detalle);
		$("#forma-nuevo-media-tarde").addClass('hide');
		sAlert.success(titulo+'se ha dado de alta en media tarde');
	},
	'click #send-nuevo-cena': function(e){
		var titulo = $("#titulo-plat-cena").val();
		var detalle = $("#detalle-plat-cena").val();
		Meteor.call("agregaPlatilloCena",this.params._id,titulo,detalle);
		$("#forma-nuevo-cena").addClass('hide');
		sAlert.success(titulo+'se ha dado de alta en cena');
	},
	'change #racion-desayuno': function(e){
		var racion = e.target.value;
		Meteor.call("cambiaAgregaRacionDesayuno",this.params._id,racion);
		sAlert.success('se ha modificado correctamente la ración de desayuno');
	},
	'change #racion-media-mañana': function(e){
		var racion = e.target.value;
		Meteor.call("cambiaAgregaRacionMediaMañana",this.params._id,racion);
		sAlert.success('se ha modificado correctamente la ración de media mañana');
	},
	'change #racion-comida': function(e){
		var racion = e.target.value;
		Meteor.call("cambiaAgregaRacionComida",this.params._id,racion);
		sAlert.success('se ha modificado correctamente la ración de comida');
	},
	'change #racion-media-tarde': function(e){
		var racion = e.target.value;
		Meteor.call("cambiaAgregaRacionMediaTarde",this.params._id,racion);
		sAlert.success('se ha modificado correctamente la ración de media tarde');
	},
	'change #racion-cena': function(e){
		var racion = e.target.value;
		Meteor.call("cambiaAgregaRacionCena",this.params._id,racion);
		sAlert.success('se ha modificado correctamente la ración de cena');
	},
	'change .changeTitulo.desayuno':function(e){
		var titulo = e.target.value;
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("editaPlatilloTituloDesayuno",paramId,_id,titulo);
		sAlert.success('se ha modificado correctamente el platillo '+titulo+' en desayuno');
	},
	'change .changeTitulo.media_mañana':function(e){
		var titulo = e.target.value;
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("editaPlatilloTituloMediaMañana",paramId,_id,titulo);
		sAlert.success('se ha modificado correctamente el platillo '+titulo+' en media mañana');
	},
	'change .changeTitulo.comida':function(e){
		var titulo = e.target.value;
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("editaPlatilloTituloComida",paramId,_id,titulo);
		sAlert.success('se ha modificado correctamente el platillo '+titulo+' en comida');
	},
	'change .changeTitulo.media_tarde':function(e){
		var titulo = e.target.value;
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("editaPlatilloTituloMediaTarde",paramId,_id,titulo);
		sAlert.success('se ha modificado correctamente el platillo '+titulo+' en media tarde');
	},
	'change .changeTitulo.cena':function(e){
		var titulo = e.target.value;
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("editaPlatilloTituloCena",paramId,_id,titulo);
		sAlert.success('se ha modificado correctamente el platillo '+titulo+' en cena');
	},
	'change .changeDetalle.desayuno':function(e){
		var detalle = e.target.value;
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("editaPlatilloDetalleDesayuno",paramId,_id,detalle);
		sAlert.success('se ha modificado correctamente el platillo '+titulo+' en desayuno');
	},
	'change .changeDetalle.media_mañana':function(e){
		var detalle = e.target.value;
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("editaPlatilloDetalleMediaMañana",paramId,_id,detalle);
		sAlert.success('se ha modificado correctamente el platillo '+titulo+' en media mañana');
	},
	'change .changeDetalle.comida':function(e){
		var detalle = e.target.value;
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("editaPlatilloDetalleComida",paramId,_id,detalle);
		sAlert.success('se ha modificado correctamente el platillo '+titulo+' en comida');
	},
	'change .changeDetalle.media_tarde':function(e){
		var detalle = e.target.value;
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("editaPlatilloDetalleMediaTarde",paramId,_id,detalle);
		sAlert.success('se ha modificado correctamente el platillo '+titulo+' en media tarde');
	},
	'change .changeDetalle.cena':function(e){
		var detalle = e.target.value;
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("editaPlatilloDetalleCena",paramId,_id,detalle);
		sAlert.success('se ha modificado correctamente el platillo '+titulo+' en cena');
	},
	'click .delete.desayuno':function(e){
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("borraPlatilloDesayuno",paramId,_id);
		sAlert.success('se ha borrado el platillo de desayuno');
	},
	'click .delete.media_mañana':function(e){
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("borraPlatilloMediaMañana",paramId,_id);
		sAlert.success('se ha borrado el platillo de media mañana');
	},
	'click .delete.comida':function(e){
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("borraPlatilloComida",paramId,_id);
		sAlert.success('se ha borrado el platillo de comida');
	},
	'click .delete.media_tarde':function(e){
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("borraPlatilloMediaTarde",paramId,_id);
		sAlert.success('se ha borrado el platillo de media tarde');
	},
	'click .delete.cena':function(e){
		var _id = e.target.parentElement.parentElement.id;
		var paramId = Router.current().params._id;
		Meteor.call("borraPlatilloCena",paramId,_id);
		sAlert.success('se ha borrado el platillo de cena');
	}
});

Template.PerfilUserMeals.rendered = function() {
	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
		max: Date.now(),
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
};

Template.PerfilUserMeals.helpers({
	desayunoMealTitulo: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).desayuno.titulo;
	},
	mediaMañanaMealTitulo: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).media_mañana.titulo;
	},
	comidaMealTitulo: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).comida.titulo;
	},
	mediaTardeMealTitulo: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).media_tarde.titulo;
	},
	cenaMealTitulo: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).cena.titulo;
	},
	desayunoMealDetalle: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).desayuno.detalle;
	},
	mediaMañanaMealDetalle: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).media_mañana.detalle;
	},
	comidaMealDetalle: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).comida.detalle;
	},
	mediaTardeMealDetalle: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).media_tarde.detalle;
	},
	cenaMealDetalle: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).cena.detalle;
	},
	desayunoMealRacion: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).desayuno.racion;
	},
	mediaMañanaMealRacion: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).media_mañana.racion;
	},
	comidaMealRacion: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).comida.racion;
	},
	mediaTardeMealRacion: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).media_tarde.racion;
	},
	cenaMealRacion: function(){
		var paramId = Router.current().params._id;
		return Meals.findOne({fecha:Session.get('dateSelected')}).cena.racion;
	}
});

Template.PerfilUserMeals.events({
	'change .datepicker': function(e){
		Session.set('dateSelected',new Date($('.datepicker').val()));
	}
});
