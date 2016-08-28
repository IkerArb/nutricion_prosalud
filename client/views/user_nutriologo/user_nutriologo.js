Template.UserNutriologo.rendered = function() {
	$('ul.tabs').tabs();
	$('.tooltipped').tooltip({delay: 50});
};

Template.UserNutriologo.events({

});

Template.UserNutriologo.helpers({

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

  name:function(){
  return Meteor.user().profile.name;
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
	racionMediaMañana: function(){
		return Meteor.users.findOne({_id: this.params._id}).profile.menu.media_mañana.racion;
	},
	racionComida: function(){
		return Meteor.users.findOne({_id: this.params._id}).profile.menu.comida.racion;
	},
	racionMediaTarde: function(){
		return Meteor.users.findOne({_id: this.params._id}).profile.menu.media_tarde.racion;
	},
	racionCena: function(){
		return Meteor.users.findOne({_id: this.params._id}).profile.menu.cena.racion;
	}
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
	'change #racion-desayuno': function(e){
		var racion = e.target.value;
		Meteor.call("cambiaAgregaRacionDesayuno",this.params._id,racion);
	},
	'change #racion-media-mañana': function(e){
		var racion = e.target.value;
		Meteor.call("cambiaAgregaRacionMediaMañana",this.params._id,racion);
	},
	'change #racion-comida': function(e){
		var racion = e.target.value;
		Meteor.call("cambiaAgregaRacionComida",this.params._id,racion);
	},
	'change #racion-media-tarde': function(e){
		var racion = e.target.value;
		Meteor.call("cambiaAgregaRacionMediaTarde",this.params._id,racion);
	},
	'change #racion-cena': function(e){
		var racion = e.target.value;
		Meteor.call("cambiaAgregaRacionCena",this.params._id,racion);
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
	// console.log(Date().toString());
	// $('.datepicker').val(Date().toString());
};
