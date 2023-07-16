// All code in this file is my own.

const { Router } = require("express");

const transmissionController = require("../controllers/transmissionController");

const transmissionRouter = Router();

transmissionRouter.get("/", transmissionController.list);

transmissionRouter.get("/:id", transmissionController.show);

module.exports = transmissionRouter;
