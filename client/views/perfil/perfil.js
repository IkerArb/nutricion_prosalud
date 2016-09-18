var colorGraphs = ['#880e4f', '#651fff', '#ffd600', '#b71c1c', '#039be5',
'#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'];

Template.Perfil.rendered = function() {
$('ul.tabs').tabs();
};

Template.Perfil.events({

});

Template.Perfil.helpers({
  pesoReciente: function(){
		return Estudios.findOne({paciente:Meteor.userId()},{sort:{createdAt:-1}}).peso;
	},
	tallaReciente: function(){
		return Estudios.findOne({paciente:Meteor.userId()},{sort:{createdAt:-1}}).talla;
	},
	grasaReciente: function(){
		return Estudios.findOne({paciente:Meteor.userId()},{sort:{createdAt:-1}}).grasa;
	},
	musculoReciente: function(){
		return Estudios.findOne({paciente:Meteor.userId()},{sort:{createdAt:-1}}).muscular;
	},
	aguaReciente: function(){
		return Estudios.findOne({paciente:Meteor.userId()},{sort:{createdAt:-1}}).agua;
	},
  chartGeneral: function () {
		var estudios = Estudios.find({paciente:Meteor.userId()},{sort:{createdAt:1}}).fetch();
		var fechas = [];
		var pesos = [];
		var tallas = [];
		var grasas = [];
		var musculos = [];
		var aguas = [];
		for (var i in estudios) {
			pesos.push(estudios[i].peso);
			tallas.push(estudios[i].talla);
			grasas.push(estudios[i].grasa);
			musculos.push(estudios[i].muscular);
			aguas.push(estudios[i].agua);
			fechas.push(estudios[i].createdAt.toLocaleDateString());
		}
    var Highcharts = require('highcharts');
      // Gather data:

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart', {
          title: {
            text: 'Gráfica General de Todas las Métricas',
            x: -20 //center
        },
        subtitle: {
            text: 'De acuerdo a las mediciones hechas',
            x: -20
        },
        xAxis: {
            categories: fechas
        },
        yAxis: {
            title: {
                text: 'Valores'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'unidades'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Peso',
            data: pesos
        }, {
            name: 'Talla',
            data: tallas
        }, {
            name: 'Grasa',
            data: grasas
        }, {
            name: 'Musculo',
            data: musculos
        },{
					name: 'Agua',
					data: aguas
				}],
				colors: colorGraphs
    });
  });
  },
  chartPeso: function () {
		var estudios = Estudios.find({paciente:Meteor.userId()},{sort:{createdAt:1}}).fetch();
		var fechas = [];
		var pesos = [];
		for (var i in estudios) {
			pesos.push(estudios[i].peso);
			fechas.push(estudios[i].createdAt.toLocaleDateString());
		}
    var Highcharts = require('highcharts');
      // Gather data:

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart0', {
          title: {
            text: 'Gráfica de Peso',
            x: -20 //center
        },
        subtitle: {
            text: 'Pesos medidos en kilogramos',
            x: -20
        },
        xAxis: {
            categories: fechas
        },
        yAxis: {
            title: {
                text: 'Peso (Kgs)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'Kgs'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Peso',
            data: pesos
        }],
				colors: [colorGraphs[0]]
    });
  });
  },
  chartTalla: function () {
		var estudios = Estudios.find({paciente:Meteor.userId()},{sort:{createdAt:1}}).fetch();
		var fechas = [];
		var tallas = [];
		for (var i in estudios) {
			tallas.push(estudios[i].talla);
			fechas.push(estudios[i].createdAt.toLocaleDateString());
		}
    var Highcharts = require('highcharts');
      // Gather data:

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart1', {
          title: {
            text: 'Gráfica de talla de cintura',
            x: -20 //center
        },
        subtitle: {
            text: 'Tallas de Cintura medidas en cms',
            x: -20
        },
        xAxis: {
            categories: fechas
        },
        yAxis: {
            title: {
                text: 'Talla (Cms)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'Cms'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [ {
            name: 'Tallas',
            data: tallas
        }],
				colors: [colorGraphs[1]]
    });
  });
  },
  chartGrasa: function () {
    var Highcharts = require('highcharts');
      // Gather data:
			var estudios = Estudios.find({paciente:Meteor.userId()},{sort:{createdAt:1}}).fetch();
			var fechas = [];
			var grasas = [];
			for (var i in estudios) {
				grasas.push(estudios[i].grasa);
				fechas.push(estudios[i].createdAt.toLocaleDateString());
			}

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart2', {
          title: {
            text: 'Gráfica de Porcentajes de Grasa',
            x: -20 //center
        },
        subtitle: {
            text: 'Grasa medida en porcentaje corporal',
            x: -20
        },
        xAxis: {
            categories: fechas
        },
        yAxis: {
            title: {
                text: '% de Grasa Corporal'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Grasas',
            data: grasas
        }],
				colors: [colorGraphs[2]]
    });
  });
  },
  chartMusculo: function () {
    var Highcharts = require('highcharts');
      // Gather data:
			var estudios = Estudios.find({paciente:Meteor.userId()},{sort:{createdAt:1}}).fetch();
			var fechas = [];
			var musculos = [];
			for (var i in estudios) {
				musculos.push(estudios[i].muscular);
				fechas.push(estudios[i].createdAt.toLocaleDateString());
			}

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart3', {
          title: {
            text: 'Gráfica de Porcentajes de Músculo',
            x: -20 //center
        },
        subtitle: {
            text: 'Músculo medida en porcentaje corporal',
            x: -20
        },
        xAxis: {
            categories: fechas
        },
        yAxis: {
            title: {
                text: '% de Músculo'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Músculo',
            data: musculos
        }],
				colors: [colorGraphs[3]]
    });
  });
  },
	chartAgua: function () {
    var Highcharts = require('highcharts');
      // Gather data:
			var estudios = Estudios.find({paciente:Meteor.userId()},{sort:{createdAt:1}}).fetch();
			var fechas = [];
			var aguas = [];
			for (var i in estudios) {
				aguas.push(estudios[i].agua);
				fechas.push(estudios[i].createdAt.toLocaleDateString());
			}

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart4', {
          title: {
            text: 'Gráfica de Porcentajes de Agua',
            x: -20 //center
        },
        subtitle: {
            text: 'Agua medida en porcentaje corporal',
            x: -20
        },
        xAxis: {
            categories: fechas
        },
        yAxis: {
            title: {
                text: '% de Agua'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Agua',
            data: aguas
        }],
				colors: [colorGraphs[4]]
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
