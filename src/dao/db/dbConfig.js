import mongoose from "mongoose";


const URI ='mongodb+srv://francotrading94:francotrading94@cluster0.ab4wfj0.mongodb.net/ecommerce?retryWrites=true&w=majority'
mongoose.connect(URI)
.then (()=>console.log('conectado a tu ecommerce'))
.catch (error=>console.log(error))