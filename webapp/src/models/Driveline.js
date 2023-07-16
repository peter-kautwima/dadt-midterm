// All code in this file is my own.

const Sequelize = require("sequelize");

const sequelize = require("../config/sequilize");

const Driveline = sequelize.define(
	"driveline",
	{
		id: { type: Sequelize.INTEGER, primaryKey: true },
		name: Sequelize.STRING,
		car_id: Sequelize.STRING,
	},
	{
		tableName: "driveline",
		timestamps: false,
	}
);

module.exports = Driveline;
