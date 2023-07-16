// All code in this file is my own.

const { Router } = require("express");

const { BASE_URL } = require("../utils/constants");

const appRouter = Router();

appRouter.get("/", async (req, res) => {
	const q1 = await fetch(`${BASE_URL}/api/questions/city-highway-mileage`);
	const q1Res = await q1.json();
	const q2 = await fetch(`${BASE_URL}/api/questions/automatic-manual-mileage`);
	const q2Res = await q2.json();
	const q3 = await fetch(`${BASE_URL}/api/questions/fuel-type-mileage`);
	const q3Res = await q3.json();
	const q4 = await fetch(`${BASE_URL}/api/questions/engine-modifiers-mileage`);
	const q4Res = await q4.json();
	const q5 = await fetch(`${BASE_URL}/api/questions/car-makes-mileage`);
	const q5Res = await q5.json();

	const q1Data = [
		{
			x: ["Average City MPG", "Average Highway MPG"],
			y: Object.keys(q1Res)
				.filter((key) => key !== "mileage_comparison")
				.map((key) => q1Res[key]),
			type: "bar",
		},
	];

	const q1Layout = {
		title: "City Miles per Gallon vs Highway Miles per Gallon",
		yaxis: { title: "mpg" },
		dragmode: false,
	};

	const q2XValues = q2Res.map((item) => item.transmission_type);
	const q2YCityMPG = q2Res.map((item) => item.average_city_mpg);
	const q2YHighwayMPG = q2Res.map((item) => item.average_highway_mpg);

	// Define the trace for city MPG
	const q2TraceCityMPG = {
		x: q2XValues,
		y: q2YCityMPG,
		name: "City MPG",
		type: "bar",
	};

	// Define the trace for highway MPG
	const q2TraceHighwayMPG = {
		x: q2XValues,
		y: q2YHighwayMPG,
		name: "Highway MPG",
		type: "bar",
	};

	const q2Data = [q2TraceCityMPG, q2TraceHighwayMPG];

	const q2Layout = {
		title: "Average MPG by Transmission Type",
		xaxis: {
			title: "Transmission Type",
		},
		yaxis: {
			title: "mpg",
		},
		barmode: "group",
		dragmode: false,
	};

	const q3XValues = q3Res.map((item) => item.fuel_type);
	const q3YCityMPG = q3Res.map((item) => item.average_city_mpg);
	const q3YHighwayMPG = q3Res.map((item) => item.average_highway_mpg);

	// Define the trace for city MPG
	const q3TraceCityMPG = {
		x: q3XValues,
		y: q3YCityMPG,
		name: "City MPG",
		type: "bar",
	};

	// Define the trace for highway MPG
	const q3TraceHighwayMPG = {
		x: q3XValues,
		y: q3YHighwayMPG,
		name: "Highway MPG",
		type: "bar",
	};

	const q3Data = [q3TraceCityMPG, q3TraceHighwayMPG];

	const q3Layout = {
		title: "Average MPG by Fuel Type",
		xaxis: {
			title: "Fuel Type",
		},
		yaxis: {
			title: "mpg",
		},
		barmode: "group",
		dragmode: false,
	};

	const q4XValues = q4Res.map((item) => item.engine_modifier);
	const q4YCityMPG = q4Res.map((item) => item.average_city_mpg);
	const q4YHighwayMPG = q4Res.map((item) => item.average_highway_mpg);

	// Define the trace for city MPG
	const q4TraceCityMPG = {
		x: q4XValues,
		y: q4YCityMPG,
		name: "City MPG",
		type: "bar",
	};

	// Define the trace for highway MPG
	const q4TraceHighwayMPG = {
		x: q4XValues,
		y: q4YHighwayMPG,
		name: "Highway MPG",
		type: "bar",
	};

	const q4Data = [q4TraceCityMPG, q4TraceHighwayMPG];

	const q4Layout = {
		title: "Average MPG by Engine Modifiers",
		xaxis: {
			title: "Engine Modifiers",
		},
		yaxis: {
			title: "mpg",
		},
		barmode: "group",
		dragmode: false,
	};

	const q5XValues = q5Res.map((item) => item.make);
	const q5YCityMPG = q5Res.map((item) => item.average_city_mpg);
	const q5YHighwayMPG = q5Res.map((item) => item.average_highway_mpg);

	// Define the trace for city MPG
	const q5TraceCityMPG = {
		x: q5XValues,
		y: q5YCityMPG,
		name: "City MPG",
		type: "bar",
	};

	// Define the trace for highway MPG
	const q5TraceHighwayMPG = {
		x: q5XValues,
		y: q5YHighwayMPG,
		name: "Highway MPG",
		type: "bar",
	};

	const q5Data = [q5TraceCityMPG, q5TraceHighwayMPG];

	const q5Layout = {
		title: "Average MPG by Make",
		xaxis: {
			title: "Make",
		},
		yaxis: {
			title: "mpg",
		},
		barmode: "group",
		dragmode: false,
	};

	res.render("app", {
		title: "Cars Database Explorer",
		q1: q1Res,
		q2: q2Res,
		q3: q3Res,
		q4: q4Res,
		q5: q5Res,
		q1Data: JSON.stringify(q1Data),
		q1Layout: JSON.stringify(q1Layout),
		q2Data: JSON.stringify(q2Data),
		q2Layout: JSON.stringify(q2Layout),
		q3Data: JSON.stringify(q3Data),
		q3Layout: JSON.stringify(q3Layout),
		q4Data: JSON.stringify(q4Data),
		q4Layout: JSON.stringify(q4Layout),
		q5Data: JSON.stringify(q5Data),
		q5Layout: JSON.stringify(q5Layout),
	});
});

appRouter.get("/car", async (req, res) => {
	const cars = await fetch(`${BASE_URL}/api/cars`);
	const carsRes = await cars.json();

	res.render("car", {
		title: "Cars Database Explorer | Car Table",
		cars: carsRes,
	});
});

appRouter.get("/driveline", async (req, res) => {
	const drivelines = await fetch(`${BASE_URL}/api/drivelines`);
	const drivelinesRes = await drivelines.json();

	res.render("driveline", {
		title: "Cars Database Explorer | Driveline Table",
		drivelines: drivelinesRes,
	});
});

appRouter.get("/fuel-type", async (req, res) => {
	const fuelTypes = await fetch(`${BASE_URL}/api/fuel-types`);
	const fuelTypesRes = await fuelTypes.json();

	res.render("fuel-type", {
		title: "Cars Database Explorer | Fuel Type Table",
		fuelTypes: fuelTypesRes,
	});
});

appRouter.get("/mileage", async (req, res) => {
	const mileages = await fetch(`${BASE_URL}/api/mileages`);
	const mileagesRes = await mileages.json();

	res.render("mileage", {
		title: "Cars Database Explorer | Mileage Table",
		mileages: mileagesRes,
	});
});

appRouter.get("/transmission", async (req, res) => {
	const transmissions = await fetch(`${BASE_URL}/api/transmissions`);
	const transmissionsRes = await transmissions.json();

	res.render("transmission", {
		title: "Cars Database Explorer | Transmission Table",
		transmissions: transmissionsRes,
	});
});

module.exports = appRouter;
