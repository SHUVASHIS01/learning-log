const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  color: { type: String, required: true },
  season: { type: String, required: true },
  lastWorn: { type: Date, default: null },
  timesWorn: { type: Number, default: 0 },
  image: { type: String, default: '' },
  notes: { type: String, default: '' },
  userId: { type: String, required: true }
}, {
  timestamps: true,
  collection: 'clothes'
});

module.exports = mongoose.model('Clothing', clothingSchema);
