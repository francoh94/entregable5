import { cartsModels } from "./models/carts.model.js";


class CartsMongo {

    async getcarts(){
        try{
        const carts = await cartsModels.find({})
        return carts
        }
        catch(error){
            return error
        }
    }
    async findById(id){
        try{
        const cart = await cartsModels.findById(id)
        return cart
        }
        catch(error){
            return error
        }
    }
    async createCart(obj){
        try{
        const carts = await cartsModels.create(obj)
        return carts
        }
        catch(error){
            return error
        }
    }
    async updateOne (id,obj){
        try{
        const cart = await cartsModels.updateOne({_id:id},{...obj})
        return cart
        }
        catch(error){
            return error
        }
    }
    async deleteCart(id){
        try{
        const cart = await cartsModels.findByIdAndDelete(id)
        }
        catch(error){
            return error
        }
    }
}

export const cartsMongo = new CartsMongo();

