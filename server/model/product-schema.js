import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailURL: String,
    title: Object,
    price: Object,
    quantity: Number,
    discription: String,
    discount: String,
    tagline: String,

});

const Product = mongoose.model('product',productSchema);

export default Product;