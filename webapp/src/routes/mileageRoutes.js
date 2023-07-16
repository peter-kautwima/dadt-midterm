// All code in this file is my own.

const { Router } = require("express");

const mileageController = require("../controllers/mileageController");

const mileageRouter = Router();

mileageRouter.get("/", mileageController.list);

mileageRouter.get("/:id", mileageController.show);

module.exports = mileageRouter;
