'use strict';
module.exports = function(sequelize, DataTypes) {
  var rating = sequelize.define('Rating', {
    score: DataTypes.INTEGER
  });
  return rating;
};
