import express from "express";
import handlebars from 'express-handlebars'
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import { __dirname } from "./utils.js";
import './dao/db/dbConfig.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine','handlebars')

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);




const port = 8081;
app.listen(port, () => {
  console.log("Servidor activo en el puerto 8081");
});
