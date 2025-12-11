const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  duration: String,
  image: String,
  languages: [String],
  tech: [String],
  tags: [String],
  features: [String],
  challenges: [String],
  future: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", ProjectSchema, "projects");
