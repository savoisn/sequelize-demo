module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		firstName: {
			type: DataTypes.STRING
		},
		lastName: {
			type: DataTypes.STRING
		}
	});

  User.associate = function(models){
    models.User.belongsToMany(models.Restaurant, {through: models.Rating});
  }

  return User
}
