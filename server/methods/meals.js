Meteor.methods({
  comerDesayuno:function(fechaParam,titulo,detalle,userId){
    var user = Meteor.users.findOne(userId);
    if(Meals.find({fecha:fechaParam}).fetch().length>0){
      return Meals.update({fecha:fechaParam},{$set:{desayuno:{titulo:titulo,detalle:detalle,racion:user.profile.menu.desayuno.racion}}});
    }
    return Meals.insert(
      {
        fecha:fechaParam,
        desayuno:{
          titulo:titulo,
          detalle:detalle,
          racion:user.profile.menu.desayuno.racion
        }
      }
    );
  },
  comerMediaMañana:function(fechaParam,titulo,detalle,userId){
    var user = Meteor.users.findOne(userId);
    if(Meals.find({fecha:fechaParam}).fetch().length>0){
      return Meals.update({fecha:fechaParam},{$set:{media_mañana:{titulo:titulo,detalle:detalle,racion:user.profile.menu.media_mañana.racion}}});
    }
    return Meals.insert(
      {
        fecha:fechaParam,
        media_mañana:{
          titulo:titulo,
          detalle:detalle,
          racion:user.profile.menu.media_mañana.racion
        }
      }
    );
  },
  comerComida:function(fechaParam,titulo,detalle,userId){
    var user = Meteor.users.findOne(userId);
    if(Meals.find({fecha:fechaParam}).fetch().length>0){
      return Meals.update({fecha:fechaParam},{$set:{comida:{titulo:titulo,detalle:detalle,racion:user.profile.menu.comida.racion}}});
    }
    return Meals.insert(
      {
        fecha:fechaParam,
        comida:{
          titulo:titulo,
          detalle:detalle,
          racion:user.profile.menu.comida.racion
        }
      }
    );
  },
  comerMediaTarde:function(fechaParam,titulo,detalle,userId){
    var user = Meteor.users.findOne(userId);
    if(Meals.find({fecha:fechaParam}).fetch().length>0){
      return Meals.update({fecha:fechaParam},{$set:{media_tarde:{titulo:titulo,detalle:detalle,racion:user.profile.menu.media_tarde.racion}}});
    }
    return Meals.insert(
      {
        fecha:fechaParam,
        media_tarde:{
          titulo:titulo,
          detalle:detalle,
          racion:user.profile.menu.media_tarde.racion
        }
      }
    );
  },
  comerCena:function(fechaParam,titulo,detalle,userId){
    var user = Meteor.users.findOne(userId);
    if(Meals.find({fecha:fechaParam}).fetch().length>0){
      return Meals.update({fecha:fechaParam},{$set:{cena:{titulo:titulo,detalle:detalle,racion:user.profile.menu.cena.racion}}});
    }
    return Meals.insert(
      {
        fecha:fechaParam,
        cena:{
          titulo:titulo,
          detalle:detalle,
          racion:user.profile.menu.cena.racion
        }
      }
    );
  }
});
