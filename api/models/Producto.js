const mongoose = require('mongoose');
const ProductosSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    background: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
        enum: ['rojo', 'blanco', 'espumoso'],
    },
    price: {
        type: Number,
        trim: true,
        required: true,
    },
    discount: {
        type: Number,
        trim: true,
        required: true,
        default: 0,
    },
});

module.exports = mongoose.model('Producto', ProductosSchema);
