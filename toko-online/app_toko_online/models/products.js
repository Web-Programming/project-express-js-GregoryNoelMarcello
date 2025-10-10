const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Nama produk harus diisi'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Harga produk harus diisi'],
        min: [1000, 'Harga produk minimal 1000'],
        //max: [100000000, 'Harga produk maksimal 100000000'],
    },
    description: {
        type: String,
        required: false,
    },
    stock: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

//buat skema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;