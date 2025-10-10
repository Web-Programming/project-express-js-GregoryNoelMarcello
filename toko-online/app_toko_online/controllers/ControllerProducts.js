var products = require('../../data/products.json');
var Product = require("../models/products");
const indedx = async (req, res) => {
    try {
        const products = await Product.find({});
        res.render("index", {
            title: "Toko Online Sederhana - Ini Dari Mongo DB", 
            products: prod
        });
    } catch (err) {
        res.status(500).send("Gagal memuat produk");
    }
}; 

const detail = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById({});
    
module.exports = { getProductById};
