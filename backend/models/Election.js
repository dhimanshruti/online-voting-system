const mongoose = require('mongoose');

const electionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }],
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Election', electionSchema);
