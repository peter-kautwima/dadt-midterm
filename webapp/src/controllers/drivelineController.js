// All code in this file is my own.

const Driveline = require("../models/Driveline");

const drivelineController = {
	list: async (req, res) => {
		try {
			const drivelines = await Driveline.findAll();

			return res.status(200).json(drivelines);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},

	show: async (req, res) => {
		try {
			const id = req.params.id;

			const driveline = await Driveline.findAll({
				where: {
					id,
				},
			});

			if (!driveline)
				return res
					.status(404)
					.json({ data: `No driveline found with id ${id}` });

			return res.status(200).json(driveline[0]);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},
};

module.exports = drivelineController;
