const express = require("express");
const app = express();
const connection = require("../config/db");
const PORT = process.env.PORT;
const operatorRouter = require("../src/Routers/operator.route");
const RouteRoute = require("../src/Routers/route.route");
const busRoute = require("../src/Routers/bus.route");
const passengerRoute = require("./Routers/passenger.route");
const reservationRoute = require("./Routers/reservation.route");
const readROute = require("./Routers/read.route");
const updateRoute = require("./Routers/update.route");
const deleteRoute = require("./Routers/delete.route");

app.use(express.json());
app.use("/operator", operatorRouter);
app.use("/routes", RouteRoute);
app.use("/bus", busRoute);
app.use("/passenger", passengerRoute);
app.use("/reservation", reservationRoute);
app.use("/get", readROute);
app.use("/update", updateRoute);
app.use("/delete", deleteRoute);

app.listen(PORT, async () => {
  try {
    await connection();

    console.log(`sever is running on${PORT}`);
  } catch (error) {
    console.log(`error occurred  from sever ${error}`);
  }
});
