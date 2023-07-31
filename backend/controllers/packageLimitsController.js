import asyncHandler from "express-async-handler";
import PackageLimit from "../models/packageModel.js";

// desc establecer parametros de paquetes
// ruta POST /api/packagelimits
// acceso Publico

const addPackageLimits = asyncHandler(async (req, res) => {
  const { peso, largo, alto, ancho } = req.body;

  const packageLimits = await PackageLimit.create({ peso, largo, alto, ancho });

  if (packageLimits) {
    res.json(packageLimits);
  } else {
    res.status(400);
    throw new Error("data de limites de paquetes no es valida");
  }
});

// desc establecer parametros de paquetes
// ruta GET /api/packagelimits
// acceso Publico

const getPackageLimits = asyncHandler(async (req, res) => {
  const packageLimits = await PackageLimit.findOne();

  if (packageLimits) {
    res.json(packageLimits);
  } else {
    res.status(404);
    throw new Error("No hay limites establecidos");
  }
});

export { addPackageLimits, getPackageLimits };
