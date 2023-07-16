// All code in this file is my own.

const Sequelize = require("sequelize");

const sequelize = require("../config/sequilize");

const FuelType = sequelize.define(
	"fuel_type",
	{
		id: { type: Sequelize.INTEGER, primaryKey: true },
		name: Sequelize.STRING,
		car_id: Sequelize.STRING,
	},
	{
		tableName: "fuel_type",
		timestamps: false,
	}
);

module.exports = FuelType;
