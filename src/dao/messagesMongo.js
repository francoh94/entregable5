import { messagesModels } from "./models/messages.model.js"

class MessagesMongo {

    async getMessages (){
        try{
        const messages = await messagesModels.find({})
        return messages
        }
        catch(error){
            return error
        }
    }
    async addMessages (obj){
        try{
        const newmessage = await messagesModels.create(obj)
        return newmessage
        }
        catch (error){
            return error
        }
    }}

    export const messagesMongo = new MessagesMongo()