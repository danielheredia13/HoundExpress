import express from "express";
import {
  addPackageLimits,
  getPackageLimits,
} from "../controllers/packageLimitsController.js";

const router = express.Router();

router.route("/").post(addPackageLimits).get(getPackageLimits);

export default router;
