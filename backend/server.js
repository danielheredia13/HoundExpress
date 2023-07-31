import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import shipmentRoutes from "./routes/shipmentRoutes.js";
import zipCodesRoutes from "./routes/zipcodeRoutes.js";
import packageLimitsRoutes from "./routes/packagelimitsRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/shipment", shipmentRoutes);

app.use("/api/zipcode", zipCodesRoutes);

app.use("/api/packagelimits", packageLimitsRoutes);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(
  { port },
  console.log(`Server running on ${process.env.NODE_ENV} on port ${port}`)
);
