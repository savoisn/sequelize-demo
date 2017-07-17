'use strict';
module.exports = function(sequelize, DataTypes) {
  var Categorie = sequelize.define('Categorie', {
    label: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Categorie;
};