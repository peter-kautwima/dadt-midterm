// All code in this file is my own.

const Mileage = require("../models/Mileage");

const mileageController = {
	list: async (req, res) => {
		try {
			const mileages = await Mileage.findAll();

			return res.status(200).json(mileages);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},

	show: async (req, res) => {
		try {
			const id = req.params.id;

			const mileage = await Mileage.findAll({
				where: {
					id,
				},
			});

			if (!mileage)
				return res.status(404).json({ data: `No mileage found with id ${id}` });

			return res.status(200).json(mileage[0]);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},
};

module.exports = mileageController;
