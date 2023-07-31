import mongoose from "mongoose";

const zipCodeSchema = mongoose.Schema({
  codigoPostal: {
    type: String,
  },
  colonia: {
    type: String,
  },
  delegacion: {
    type: String,
  },
  estado: {
    type: String,
  },
});

const ZipCode = mongoose.model("ZipCode", zipCodeSchema);

export default ZipCode;
