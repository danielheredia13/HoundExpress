import mongoose from "mongoose";

const packageLimitSchema = mongoose.Schema({
  peso: {
    type: Number,
  },
  alto: {
    type: Number,
  },
  largo: {
    type: Number,
  },
  ancho: {
    type: Number,
  },
});

const PackageLimit = mongoose.model("PackageLimit", packageLimitSchema);

export default PackageLimit;
