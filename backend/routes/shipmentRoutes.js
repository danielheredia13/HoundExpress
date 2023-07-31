import express from "express";
import {
  createShipment,
  deleteShipment,
  getShipmentById,
  getShipments,
  updateShipment,
} from "../controllers/ShipmentController.js";

const router = express.Router();

router.route("/").post(createShipment).get(getShipments);

router
  .route("/:id")
  .get(getShipmentById)
  .put(updateShipment)
  .delete(deleteShipment);
export default router;
