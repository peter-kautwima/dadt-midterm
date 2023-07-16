// All code in this file is my own.

const Sequelize = require("sequelize");

const sequelize = require("../config/sequilize");

const Mileage = sequelize.define(
	"mileage",
	{
		id: { type: Sequelize.INTEGER, primaryKey: true },
		city_mpg: Sequelize.INTEGER,
		highway_mpg: Sequelize.INTEGER,
		car_id: Sequelize.STRING,
	},
	{
		tableName: "mileage",
		timestamps: false,
	}
);

module.exports = Mileage;
