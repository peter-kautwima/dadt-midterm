// All code in this file is my own.

const sequelize = require("../config/sequilize");

const questionController = {
	cityHighwayMileage: async (req, res) => {
		try {
			const result = await sequelize.query(
				`SELECT
				AVG(city_mpg) AS average_city_mpg,
				AVG(highway_mpg) AS average_highway_mpg,
				CASE
				  WHEN AVG(city_mpg) > AVG(highway_mpg) THEN 'City mileage is higher'
				  WHEN AVG(city_mpg) < AVG(highway_mpg) THEN 'Highway mileage is higher'
				  ELSE 'City and highway mileage are equal'
				END AS mileage_comparison
			  FROM
				Mileage;			  
			  `,
				{
					type: sequelize.QueryTypes.SELECT,
				}
			);

			return res.status(200).json(result[0]);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},

	automaticManualMileage: async (req, res) => {
		try {
			const result = await sequelize.query(
				`SELECT
				AVG(m.city_mpg) AS average_city_mpg,
				AVG(m.highway_mpg) AS average_highway_mpg,
				t.name AS transmission_type
			  FROM
				Mileage m
			  JOIN
				Car c ON m.car_id = c.id
			  JOIN
				Transmission t ON t.car_id = c.id
			  GROUP BY
				t.name;
			  `,
				{
					type: sequelize.QueryTypes.SELECT,
				}
			);

			return res.status(200).json(result);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},

	fuelTypeMileage: async (req, res) => {
		try {
			const result = await sequelize.query(
				`SELECT
				AVG(m.city_mpg) AS average_city_mpg,
				AVG(m.highway_mpg) AS average_highway_mpg,
				f.name AS fuel_type
			  FROM
				Mileage m
			  JOIN
				Car c ON m.car_id = c.id
			  JOIN
				Fuel_Type f ON f.car_id = c.id
			  GROUP BY
				f.name;
			  `,
				{
					type: sequelize.QueryTypes.SELECT,
				}
			);

			return res.status(200).json(result);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},

	engineModifiersMileage: async (req, res) => {
		try {
			const result = await sequelize.query(
				`SELECT
				AVG(m.city_mpg) AS average_city_mpg,
				AVG(m.highway_mpg) AS average_highway_mpg,
				c.engine_modifier
			  FROM
				Mileage m
			  JOIN
				Car c ON m.car_id = c.id
			  WHERE
				c.engine_modifier IN ('None', 'Turbo', 'FFV', 'S-charged', 'Hybrid', 'CNG', 'S-Charged', 'TURBO', 'PZEV')
			  GROUP BY
				c.engine_modifier;
			  `,
				{
					type: sequelize.QueryTypes.SELECT,
				}
			);

			return res.status(200).json(result);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},

	carMakesMileage: async (req, res) => {
		try {
			const result = await sequelize.query(
				`SELECT
				c.make,
				AVG(m.city_mpg) AS average_city_mpg,
				AVG(m.highway_mpg) AS average_highway_mpg
			  FROM
				Car c
			  JOIN
				Mileage m ON c.id = m.car_id
			  GROUP BY
				c.make
			  ORDER BY
				average_city_mpg DESC, average_highway_mpg DESC;
			  `,
				{
					type: sequelize.QueryTypes.SELECT,
				}
			);

			return res.status(200).json(result);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	},
};

module.exports = questionController;
