// All code in this file is my own.

const Sequelize = require("sequelize");

const sequelize = new Sequelize("cars", "root", process.env.MYSQL_PASSWORD, {
	host: "localhost",
	dialect: "mysql",
	// dialectOptions: {
	// 	socketPath: "/tmp/mysql.sock",
	// },
});

module.exports = sequelize;
