import express from "express";
import { getZipCodes } from "../controllers/zipCodeController.js";

const router = express.Router();

router.route("/:id").get(getZipCodes);

export default router;
