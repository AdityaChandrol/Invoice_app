const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    variant: { type: String },
    price: { type: Number, required: true },
    gst: { type: Number, default: 5 },
    stock: { type: Number, default: 0 }
});

// Export logic: Duplicate model error se bachne ke liye
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);