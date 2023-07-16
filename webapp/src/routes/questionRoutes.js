// All code in this file is my own.

const { Router } = require("express");

const questionController = require("../controllers/questionController");

const questionRouter = Router();

questionRouter.get(
	"/city-highway-mileage",
	questionController.cityHighwayMileage
);

questionRouter.get(
	"/automatic-manual-mileage",
	questionController.automaticManualMileage
);

questionRouter.get("/fuel-type-mileage", questionController.fuelTypeMileage);

questionRouter.get(
	"/engine-modifiers-mileage",
	questionController.engineModifiersMileage
);

questionRouter.get("/car-makes-mileage", questionController.carMakesMileage);

module.exports = questionRouter;
