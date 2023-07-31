import asyncHandler from "express-async-handler";
import ZipCode from "../models/zipCodeModel.js";

// desc obtener el codigo postal
// ruta GET /api/zipcode/:id
// acceso Publico

const getZipCodes = asyncHandler(async (req, res) => {
  const zipCode = await ZipCode.findOne({ codigoPostal: req.params.id });

  if (zipCode) {
    res.json(zipCode);
  } else {
    res.status(404);
    throw new Error("No hay codigo postal");
  }
});

export { getZipCodes };
