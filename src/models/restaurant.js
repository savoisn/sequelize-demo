'use strict';
module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Restaurant.hasOne(models.Categorie);
        // associations can be defined here
      }
    }
  });
  return Restaurant;
};
