// All code in this file is my own.

const { Router } = require("express");

const fuelTypeController = require("../controllers/fuelTypeController");

const fuelTypeRouter = Router();

fuelTypeRouter.get("/", fuelTypeController.list);

fuelTypeRouter.get("/:id", fuelTypeController.show);

module.exports = fuelTypeRouter;
