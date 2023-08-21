import mongoose from "mongoose";

const messagesScheam = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    messagesUser:{
        type: String,
        required: true
    },
    })

export const messagesModels = mongoose.model('messages', messagesScheam)