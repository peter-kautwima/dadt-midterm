// All code in this file is my own.

const { Router } = require("express");

const carController = require("../controllers/carController");

const carRouter = Router();

carRouter.get("/", carController.list);

carRouter.get("/:id", carController.show);

module.exports = carRouter;
