// All code in this file is my own.

const express = require("express");
const mustacheExpress = require("mustache-express");
const cors = require("cors");
require("dotenv").config();

const { PORT, BASE_URL } = require("./utils/constants");

const app = express();

// Add Express middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("public"));

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", `${__dirname}/views`);

app.use(require("./routes/indexRoutes"));
app.use("/app", require("./routes/appRoutes"));
app.use("/api/cars", require("./routes/carRoutes"));
app.use("/api/drivelines", require("./routes/drivelineRoutes"));
app.use("/api/fuel-types", require("./routes/fuelTypeRoutes"));
app.use("/api/mileages", require("./routes/mileageRoutes"));
app.use("/api/transmissions", require("./routes/transmissionRoutes"));
app.use("/api/questions", require("./routes/questionRoutes"));

app.listen(PORT, () => {
	console.log(`Server running on  ${BASE_URL}`);
});
