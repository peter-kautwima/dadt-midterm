// All code in this file is my own.

const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
	res.send("Server running");
});

module.exports = indexRouter;
