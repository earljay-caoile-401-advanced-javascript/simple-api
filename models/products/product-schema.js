'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
  categoryId: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number },
  quantity_in_stock: { type: Number, required: true },
});

module.exports = mongoose.model('product', product);
