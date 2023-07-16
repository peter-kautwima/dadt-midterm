// All code in this file is my own.

const { Router } = require("express");

const drivelineController = require("../controllers/drivelineController");

const drivelineRouter = Router();

drivelineRouter.get("/", drivelineController.list);

drivelineRouter.get("/:id", drivelineController.show);

module.exports = drivelineRouter;
