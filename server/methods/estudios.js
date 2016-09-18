Meteor.methods({
  nuevoEstudio: function(idUser,pesoParam,tallaParam,grasaParam,muscularParam,aguaParam){
    Estudios.insert({
      paciente:idUser,
      peso: pesoParam,
      talla: tallaParam,
      grasa: grasaParam,
      muscular: muscularParam,
      agua: aguaParam
    });
  }
});
