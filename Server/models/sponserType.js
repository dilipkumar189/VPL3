const mongoose = require('mongoose');

const sptypeSchema = new mongoose.Schema({
  sptype: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
});

const Sptype = mongoose.model('Sponsertype', sptypeSchema);

module.exports = Sptype;