const { Schema, model } = require("mongoose");

module.exports = model("Badge", Schema({
  id: { type: String, required: true, unique: true },
  tokens: { type: Array, default: [] }
}));