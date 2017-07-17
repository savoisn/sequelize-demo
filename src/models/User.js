module.exports = (sequelize, DataTypes) => {
	return sequelize.define('User', {
		firstName: {
			type: DataTypes.STRING
		},
		lastName: {
			type: DataTypes.STRING
		}
	})
}
