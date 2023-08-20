import mongoose from "mongoose";

const cartsScheam = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    })

export const cartsModels = mongoose.model('carts', cartsScheam)