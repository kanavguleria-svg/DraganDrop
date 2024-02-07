const mongoose = require("mongoose");

const tempoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  userId: {
    type: String,
    required: [true, "userId is required"],
  },
  copyText: {
    type: String,
  },
  fileData: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

tempoSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Tempo = mongoose.model("Tempo",tempoSchema,"Tempo");

module.exports = Tempo
