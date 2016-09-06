Meteor.methods({
  crearUsuario:function(name,email,password,birthDay,nutriologo,roles){
    var user = Accounts.createUser({
      email : email,
      password: password,
      profile:{
        name:name,
        birthDay:birthDay,
        nutriologo:nutriologo,
        rol: roles
      }
    });
    Meteor.users.update({_id:user},{$set:{roles:roles}});
  },

  addUserRole:function(userId){
    Meteor.users.update({_id:userId},{$push:{
      roles : 'user',
      'profile.rol' : 'user',
    }});
  },

  removeUserRole:function(userId){
    Meteor.users.update({_id:userId},{$pull:{
      roles : 'user',
      'profile.rol' : 'user',
    }});
  },

  addNutriologoRole:function(userId){
    Meteor.users.update({_id:userId},{$push:{
      roles : 'nutriologo',
      'profile.rol' : 'nutriologo',
    }});
  },

  removeNutriologoRole:function(userId){
    Meteor.users.update({_id:userId},{$pull:{
      roles : 'nutriologo',
      'profile.rol' : 'nutriologo',
    }});
  },

  addAdminRole:function(userId){
    Meteor.users.update({_id:userId},{$push:{
      roles : 'admin',
      'profile.rol' : 'admin',
    }});
  },

  removeAdminRole:function(userId){
    Meteor.users.update({_id:userId},{$pull:{
      roles : 'admin',
      'profile.rol' : 'admin',
    }});
  },

  changeName:function(userId,newName){
    check(newName, String);
    Meteor.users.update({_id:userId},{$set:{
      'profile.name':newName
    }});
  },

  changeEmail:function(userId,newEmail){
    check(newEmail, String);
    Meteor.users.update({_id:userId},{$set:{
      'emails.0.address':newEmail,
      'profile.email': newEmail
    }});
  },

  changeBirthDay:function(userId,newBirthDay){
    Meteor.users.update({_id:userId},{$set:{
      'profile.birthDay':newBirthDay
    }});
  },

  cambiaAgregaRacionDesayuno: function(userId,racion){
    Meteor.users.update({_id:userId},{$set:{
      'profile.menu.desayuno.racion': racion
    }});
  },

  cambiaAgregaRacionMediaMañana: function(userId,racion){
    Meteor.users.update({_id:userId},{$set:{
      'profile.menu.media_mañana.racion': racion
    }});
  },

  cambiaAgregaRacionComida: function(userId,racion){
    Meteor.users.update({_id:userId},{$set:{
      'profile.menu.comida.racion': racion
    }});
  },

  cambiaAgregaRacionMediaTarde: function(userId,racion){
    Meteor.users.update({_id:userId},{$set:{
      'profile.menu.media_tarde.racion': racion
    }});
  },

  cambiaAgregaRacionCena: function(userId,racion){
    Meteor.users.update({_id:userId},{$set:{
      'profile.menu.cena.racion': racion
    }});
  },

  agregaPlatilloDesayuno: function(userId,titulo,detalle){
    var id = new Mongo.ObjectID;
    var path = "profile.menu.desayuno.platillos."+id.toHexString();
    var options = {};
    options[path] = {
      "titulo" : titulo,
      "detalle": detalle
    };
    Meteor.users.update({_id:userId},{$set:options});
  },

  agregaPlatilloMediaMañana: function(userId,titulo,detalle){
    var id = new Mongo.ObjectID;
    var path = "profile.menu.media-mañana.platillos."+id.toHexString();
    var options = {};
    options[path] = {
      "titulo" : titulo,
      "detalle": detalle
    };
    Meteor.users.update({_id:userId},{$set:options});
  },

  agregaPlatilloComida: function(userId,titulo,detalle){
    var id = new Mongo.ObjectID;
    var path = "profile.menu.comida.platillos."+id.toHexString();
    var options = {};
    options[path] = {
      "titulo" : titulo,
      "detalle": detalle
    };
    Meteor.users.update({_id:userId},{$set:options});
  },

  agregaPlatilloMediaTarde: function(userId,titulo,detalle){
    var id = new Mongo.ObjectID;
    var path = "profile.menu.media-tarde.platillos."+id.toHexString();
    var options = {};
    options[path] = {
      "titulo" : titulo,
      "detalle": detalle
    };
    Meteor.users.update({_id:userId},{$set:options});
  },

  agregaPlatilloCena: function(userId,titulo,detalle){
    var id = new Mongo.ObjectID;
    var path = "profile.menu.cena.platillos."+id.toHexString();
    var options = {};
    options[path] = {
      "titulo" : titulo,
      "detalle": detalle
    };
    Meteor.users.update({_id:userId},{$set:options});
  },

  editaPlatilloTituloDesayuno: function(userId,platilloId, titulo){
    var path = "profile.menu.desayuno.platillos."+platilloId+".titulo";
    var options = {};
    options[path] = titulo;
    Meteor.users.update({_id:userId},{$set:options});
  },
  editaPlatilloDetalleDesayuno: function(userId,platilloId, detalle){
    var path = "profile.menu.desayuno.platillos."+platilloId+".detalle";
    var options = {};
    options[path] = detalle;
    Meteor.users.update({_id:userId},{$set:options});
  },
  editaPlatilloTituloMediaMañana: function(userId,platilloId, titulo){
    var path = "profile.menu.media-mañana.platillos."+platilloId+".titulo";
    var options = {};
    options[path] = titulo;
    Meteor.users.update({_id:userId},{$set:options});
  },
  editaPlatilloDetalleMediaMañana: function(userId,platilloId, detalle){
    var path = "profile.menu.media-mañana.platillos."+platilloId+".detalle";
    var options = {};
    options[path] = detalle;
    Meteor.users.update({_id:userId},{$set:options});
  },
  editaPlatilloTituloComida: function(userId,platilloId, titulo){
    var path = "profile.menu.comida.platillos."+platilloId+".titulo";
    var options = {};
    options[path] = titulo;
    Meteor.users.update({_id:userId},{$set:options});
  },
  editaPlatilloDetalleComida: function(userId,platilloId, detalle){
    var path = "profile.menu.comida.platillos."+platilloId+".detalle";
    var options = {};
    options[path] = detalle;
    Meteor.users.update({_id:userId},{$set:options});
  },
  editaPlatilloTituloMediaTarde: function(userId,platilloId, titulo){
    var path = "profile.menu.media-tarde.platillos."+platilloId+".titulo";
    var options = {};
    options[path] = titulo;
    Meteor.users.update({_id:userId},{$set:options});
  },
  editaPlatilloDetalleMediaTarde: function(userId,platilloId, detalle){
    var path = "profile.menu.media-tarde.platillos."+platilloId+".detalle";
    var options = {};
    options[path] = detalle;
    Meteor.users.update({_id:userId},{$set:options});
  },
  editaPlatilloTituloCena: function(userId,platilloId, titulo){
    var path = "profile.menu.cena.platillos."+platilloId+".titulo";
    var options = {};
    options[path] = titulo;
    Meteor.users.update({_id:userId},{$set:options});
  },
  editaPlatilloDetalleCena: function(userId,platilloId, detalle){
    var path = "profile.menu.cena.platillos."+platilloId+".detalle";
    var options = {};
    options[path] = detalle;
    Meteor.users.update({_id:userId},{$set:options});
  },
  borraPlatilloDesayuno: function(userId,platilloId){
    var path = "profile.menu.desayuno.platillos."+platilloId;
    var options = {};
    options[path]="";
    console.log(userId);
    Meteor.users.update({_id:userId},{$unset:options});
  },
  borraPlatilloMediaMañana: function(userId,platilloId){
    var path = "profile.menu.media-mañana.platillos."+platilloId;
    var options = {};
    options[path]="";
    Meteor.users.update({_id:userId},{$unset:options});
  },
  borraPlatilloComida: function(userId,platilloId){
    var path = "profile.menu.comida.platillos."+platilloId;
    var options = {};
    options[path]="";
    Meteor.users.update({_id:userId},{$unset:options});
  },
  borraPlatilloMediaTarde: function(userId,platilloId){
    var path = "profile.menu.media-tarde.platillos."+platilloId;
    var options = {};
    options[path]="";
    Meteor.users.update({_id:userId},{$unset:options});
  },
  borraPlatilloCena: function(userId,platilloId){
    var path = "profile.menu.cena.platillos."+platilloId;
    var options = {};
    options[path]="";
    Meteor.users.update({_id:userId},{$unset:options});
  }
});
