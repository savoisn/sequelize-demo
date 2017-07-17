'use strict';
module.exports = function(sequelize, DataTypes) {
  var Categorie = sequelize.define('Categorie', {
    label: DataTypes.STRING
  });
  Categorie.associate = function(models){
    models.Categorie.hasMany(models.Restaurant);
  };
  return Categorie;
};
