import asyncHandler from "express-async-handler";
import Shipment from "../models/shipmentModel.js";

// desc Crear nuevo envio
// ruta POST /api/shipment
// acceso Publico

const createShipment = asyncHandler(async (req, res) => {
  const {
    origenNombre,
    origenTelefono,
    origenCorreoElectronico,
    origenEmpresa,
    origenCalle,
    origenNumeroExt,
    origenNumeroInt,
    origenColonia,
    origenDelegacion,
    origenEstado,
    origenCodigoPostal,
    origenComentario,
    destinoNombre,
    destinoTelefono,
    destinoCorreoElectronico,
    destinoEmpresa,
    destinoCalle,
    destinoNumeroExt,
    destinoNumeroInt,
    destinoColonia,
    destinoDelegacion,
    destinoEstado,
    destinoCodigoPostal,
    paquetes,
  } = req.body;

  const shipment = await Shipment.create({
    origenNombre,
    origenTelefono,
    origenCorreoElectronico,
    origenEmpresa,
    origenCalle,
    origenNumeroExt,
    origenNumeroInt,
    origenColonia,
    origenDelegacion,
    origenEstado,
    origenCodigoPostal,
    origenComentario,
    destinoNombre,
    destinoTelefono,
    destinoCorreoElectronico,
    destinoEmpresa,
    destinoCalle,
    destinoNumeroExt,
    destinoNumeroInt,
    destinoColonia,
    destinoDelegacion,
    destinoEstado,
    destinoCodigoPostal,
    paquetes,
  });

  if (shipment) {
    res.status(201).json({
      _id: shipment._id,
      origenNombre,
      origenTelefono,
      origenCorreoElectronico,
      origenEmpresa,
      origenCalle,
      origenNumeroExt,
      origenNumeroInt,
      origenColonia,
      origenDelegacion,
      origenEstado,
      origenCodigoPostal,
      origenComentario,
      destinoNombre,
      destinoTelefono,
      destinoCorreoElectronico,
      destinoEmpresa,
      destinoCalle,
      destinoNumeroExt,
      destinoNumeroInt,
      destinoColonia,
      destinoDelegacion,
      destinoEstado,
      destinoCodigoPostal,
      paquetes,
    });
  } else {
    res.status(400);
    throw new Error("Informacion del envio no es valida");
  }
});

// desc obtener todos los envio
// ruta GET /api/shipment
// acceso Publico

const getShipments = asyncHandler(async (req, res) => {
  const shipmentList = await Shipment.find();

  if (shipmentList) {
    res.json(shipmentList);
  } else {
    res.status(404);
    throw new Error("No hay envios");
  }
});

// desc obtener envio por id
// ruta GET /api/shipment/:id
// acceso Publico

const getShipmentById = asyncHandler(async (req, res) => {
  const shipment = await Shipment.findById(req.params.id);

  if (shipment) {
    res.json(shipment);
  } else {
    res.status(404);
    throw new Error("Envio no encontrado");
  }
});

// desc actualizar envio
// ruta PUT /api/shipment/:id
// acceso Publico

const updateShipment = asyncHandler(async (req, res) => {
  const shipment = await Shipment.findById(req.params.id);
  const {
    origenNombre,
    origenTelefono,
    origenCorreoElectronico,
    origenEmpresa,
    origenCalle,
    origenNumeroExt,
    origenNumeroInt,
    origenColonia,
    origenDelegacion,
    origenEstado,
    origenCodigoPostal,
    origenComentario,
    destinoNombre,
    destinoTelefono,
    destinoCorreoElectronico,
    destinoEmpresa,
    destinoCalle,
    destinoNumeroExt,
    destinoNumeroInt,
    destinoColonia,
    destinoDelegacion,
    destinoEstado,
    destinoCodigoPostal,
    paquetes,
  } = await req.body;

  if (shipment) {
    shipment.origenNombre = origenNombre || shipment.origenNombre;
    shipment.origenTelefono = origenTelefono || shipment.origenTelefono;
    shipment.origenCorreoElectronico =
      origenCorreoElectronico || shipment.origenCorreoElectronico;
    shipment.origenEmpresa = origenEmpresa || shipment.origenEmpresa;
    shipment.origenCalle = origenCalle || shipment.origenCalle;
    shipment.origenNumeroExt = origenNumeroExt || shipment.origenNumeroExt;
    shipment.origenNumeroInt = origenNumeroInt || shipment.origenNumeroInt;
    shipment.origenColonia = origenColonia || shipment.origenColonia;
    shipment.origenDelegacion = origenDelegacion || shipment.origenDelegacion;
    shipment.origenEstado = origenEstado || shipment.origenEstado;
    shipment.origenCodigoPostal =
      origenCodigoPostal || shipment.origenCodigoPostal;
    shipment.origenComentario = origenComentario || shipment.origenComentario;
    shipment.destinoNombre = destinoNombre || shipment.destinoNombre;
    shipment.destinoTelefono = destinoTelefono || shipment.destinoTelefono;
    shipment.destinoCorreoElectronico =
      destinoCorreoElectronico || shipment.destinoCorreoElectronico;
    shipment.destinoEmpresa = destinoEmpresa || shipment.destinoEmpresa;
    shipment.destinoCalle = destinoCalle || shipment.destinoCalle;
    shipment.destinoNumeroExt = destinoNumeroExt || shipment.destinoNumeroExt;
    shipment.destinoNumeroInt = destinoNumeroInt || shipment.destinoNumeroInt;
    shipment.destinoColonia = destinoColonia || shipment.destinoColonia;
    shipment.destinoDelegacion =
      destinoDelegacion || shipment.destinoDelegacion;
    shipment.destinoEstado = destinoEstado || shipment.destinoEstado;
    shipment.destinoCodigoPostal =
      destinoCodigoPostal || shipment.destinoCodigoPostal;
    shipment.paquetes = paquetes || shipment.paquetes;

    const updatedShipment = await shipment.save();

    res.json(updatedShipment);
  } else {
    res.status(404);
    throw new Error("Emvio no encontrado ");
  }
});

// desc Delete envio
// ruta DELETE /api/shipment/:id
// acceso Publico

const deleteShipment = asyncHandler(async (req, res) => {
  const shipment = await Shipment.findById(req.params.id);

  if (shipment) {
    await Shipment.deleteOne({ _id: req.params.id });

    res.json({ message: "Envio borrado" });
  } else {
    res.status(404);
    throw new Error("Envio no encontrado");
  }
});

export {
  createShipment,
  getShipments,
  getShipmentById,
  updateShipment,
  deleteShipment,
};
