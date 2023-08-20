import { productsModels } from "./models/products.model.js";

class ProductsMongo {

    async getProducts (){
        try{
        const products = await productsModels.find({})
        return products
        }
        catch(error){
            return error
        }
    }
    async addProducts (obj){
        try{
        const newProducts = await productsModels.create(obj)
        return newProducts
        }
        catch (error){
            return error
        }
    }
    async getProductById (id){
        try{
        const product = await productsModels.findById(id)
        return product
        }
        catch (error){
            return error
        }
    }
    async updateProduct (id,obj){
        try{
        const product = await productsModels.updateOne({_id:id},{...obj})
        return product
        }
        catch (error){
            return error
        }
    }
    async deleteProduct (id){
        try{
        const product = await productsModels.findByIdAndDelete(id)
        return product 
        }
        catch(error){
            return error
        }
    }
}
export const productsMongo = new ProductsMongo()