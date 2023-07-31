import mongoose from "mongoose";

const shipmentSchema = mongoose.Schema(
  {
    origenNombre: {
      type: String,
      required: true,
    },
    origenTelefono: {
      type: String,
    },
    origenCorreoElectronico: {
      type: String,
    },
    origenEmpresa: {
      type: String,
    },
    origenCalle: {
      type: String,
    },
    origenNumeroExt: {
      type: String,
    },
    origenNumeroInt: {
      type: String,
    },
    origenColonia: {
      type: String,
    },
    origenDelegacion: {
      type: String,
    },
    origenEstado: {
      type: String,
    },
    origenCodigoPostal: {
      type: String,
    },
    origenComentario: {
      type: String,
    },
    destinoNombre: {
      type: String,
      required: true,
    },
    destinoTelefono: {
      type: String,
    },
    destinoCorreoElectronico: {
      type: String,
    },
    destinoEmpresa: {
      type: String,
    },
    destinoCalle: {
      type: String,
    },
    destinoNumeroExt: {
      type: String,
    },
    destinoNumeroInt: {
      type: String,
    },
    destinoColonia: {
      type: String,
    },
    destinoDelegacion: {
      type: String,
    },
    destinoEstado: {
      type: String,
    },
    destinoCodigoPostal: {
      type: String,
    },
    paquetes: [
      {
        peso: {
          type: String,
        },
        largo: {
          type: String,
        },
        ancho: {
          type: String,
        },
        alto: {
          type: String,
        },
        contenido: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Shipment = mongoose.model("Shipments", shipmentSchema);

export default Shipment;
