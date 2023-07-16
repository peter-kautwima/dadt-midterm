// All code in this file is my own.

const Car = require("../models/Car");

const carController = {
	list: async (req, res) => {
		try {
			const cars = await Car.findAll();

			return res.status(200).json(cars);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},

	show: async (req, res) => {
		try {
			const id = req.params.id;

			const car = await Car.findAll({
				where: {
					id,
				},
			});

			if (!car)
				return res.status(404).json({ data: `No car found with id ${id}` });

			return res.status(200).json(car[0]);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},
};

module.exports = carController;
