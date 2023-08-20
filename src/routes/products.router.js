import { Router } from "express";
import { productsMongo } from "../dao/productsMongo.js";

const router = Router();


router.get("/", async (req, res) => {
  const {limit} = req.query
  try{
  const products = await productsMongo.getProducts();
  const result = +limit ? products.slice(0, limit) : products;
  if(products.length){
  res.status(200).json({ message: "Todos los productos:", data: result });}else{
    res.status(200).json({message:'no hay productos'})
  }}
  catch(error){
    res.status(500).json({message: error.message})
  }
});

router.get("/:pid", async (req, res) => {
  const {pid} = req.params;
  try{
    if(!product){
    res.status(400).json({message:'id invalido'})
    }else{
  const ProductById = await productsMongo.getProductById(+pid)
  res.status(200).json({message:'producto',ProductById});
    }}
  catch (erro){
    response.status(500).json({message:"Producto no encontrado"});
    return;
  }
});

router.post('/',async(req, res) =>{
  const { title, description, price, thumbnail, code, stock } = req.body;

  if (!title || !description || !price || !thumbnail || !code || !stock) {
    return res.status(400).json({ message: "Todos los campos son obligatorios." });
  }
  try{
    const newProduct = await productsMongo.addProduct(req.body);
  res.status(200).json({message:'producto agregado con exito', newProduct})
}
catch (erro){
  res.status(500).json({message:"Error, no se pudo agregar"});
}
});

router.put('/:pid',async(req, res) =>{
  const {pid} = req.params
  try{
  const productUpdate = await productsMongo.updateProduct(+pid, req.body)
  res.status(200).json({message:'Producto modificado', productUpdate})
  }
  catch (erro){
    res.status(500).json({message:"Error, no se pudo modificar el producto"});
  }
})
router.delete('/:pid',async(req, res) =>{
  const {pid} = req.params
  try{
  const productDelete = await productsMongo.deleteProduct(+pid)
  res.status(200).json({message:'Producto eliminado', productDelete})
  }
  catch (error){
    res.status(500).json({message:"Error, no se pudo eliminar el producto"});   
}
})
export default router;
