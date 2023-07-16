// All code in this file is my own.

const FuelType = require("../models/FuelType");

const fuelTypeController = {
	list: async (req, res) => {
		try {
			const fuelTypes = await FuelType.findAll();

			return res.status(200).json(fuelTypes);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},

	show: async (req, res) => {
		try {
			const id = req.params.id;

			const fuelType = await FuelType.findAll({
				where: {
					id,
				},
			});

			if (!fuelType)
				return res
					.status(404)
					.json({ data: `No drive line found with id ${id}` });

			return res.status(200).json(fuelType[0]);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},
};

module.exports = fuelTypeController;
