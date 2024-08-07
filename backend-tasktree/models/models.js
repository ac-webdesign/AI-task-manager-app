const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  subcategories: {
    type :[subcategorySchema],
    required: false 
  },
  createdAt: { type: Date, default: Date.now },
  categoryType: { type: String, enum: ['task', 'project', 'note'], required: true }
});

const Category = mongoose.model('Category', categorySchema);

const generateAISchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  subcategories: [subcategorySchema]
});

const GenerateAI = mongoose.model('GenerateAI', generateAISchema);

module.exports = { Category, GenerateAI };
