'use strict';
module.exports = function(sequelize, DataTypes) {
  var rating = sequelize.define('Rating', {
    score: {
      type:DataTypes.INTEGER,
      validate:{
        min:0,
        max:5
      }
    }
  });
  return rating;
};
