import mongoose from "mongoose";

const productsScheam = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    })

export const productsModels = mongoose.model('products', productsScheam)