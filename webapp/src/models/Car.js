// All code in this file is my own.

const Sequelize = require("sequelize");

const sequelize = require("../config/sequilize");

const Car = sequelize.define(
	"car",
	{
		id: { type: Sequelize.STRING, primaryKey: true },
		model: Sequelize.STRING,
		year: Sequelize.INTEGER,
		horsepower: Sequelize.INTEGER,
		torque: Sequelize.INTEGER,
		make: Sequelize.STRING,
		engine_make: Sequelize.STRING,
		engine_cylinders: Sequelize.INTEGER,
		engine_modifier: Sequelize.STRING,
		engine_capacity: Sequelize.FLOAT,
	},
	{
		tableName: "car",
		timestamps: false,
	}
);

module.exports = Car;
