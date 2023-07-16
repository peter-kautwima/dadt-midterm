// All code in this file is my own.

const Transmission = require("../models/Transmission");

const transmissionController = {
	list: async (req, res) => {
		try {
			const transmissions = await Transmission.findAll();

			return res.status(200).json(transmissions);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},

	show: async (req, res) => {
		try {
			const id = req.params.id;

			const transmission = await Transmission.findAll({
				where: {
					id,
				},
			});

			if (!transmission)
				return res
					.status(404)
					.json({ data: `No transmission found with id ${id}` });

			return res.status(200).json(transmission[0]);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},
};

module.exports = transmissionController;
