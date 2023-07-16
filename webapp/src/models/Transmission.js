// All code in this file is my own.

const Sequelize = require("sequelize");

const sequelize = require("../config/sequilize");

const Transmission = sequelize.define(
	"transmission",
	{
		id: { type: Sequelize.INTEGER, primaryKey: true },
		name: Sequelize.STRING,
		car_id: Sequelize.STRING,
	},
	{
		tableName: "transmission",
		timestamps: false,
	}
);

module.exports = Transmission;
