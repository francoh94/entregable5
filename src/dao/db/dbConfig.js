import mongoose from "mongoose";


const uri = "mongodb+srv://francotrading94:francotrading94@cluster0.ab4wfj0.mongodb.net/ecommerce?retryWrites=true&w=majority";
mongoose.connect(uri)
.then (()=>console.log('conectado a tu ecommerce'))
.catch (error=>console.log(error))