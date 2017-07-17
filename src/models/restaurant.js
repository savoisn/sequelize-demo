'use strict';
module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  });
  Restaurant.associate = function(models) {
    models.Restaurant.belongsTo(models.Categorie);
    models.Restaurant.belongsToMany(models.User, {through: models.Rating});
  };
  return Restaurant;
};
