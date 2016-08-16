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
  }
});