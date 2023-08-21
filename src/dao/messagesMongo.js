import { messagesModels } from "./models/messages.model"

class MessagesMongo {

    async getmessages (){
        try{
        const messages = await messagesModels.find({})
        return messages
        }
        catch(error){
            return error
        }
    }
    async addmessages (obj){
        try{
        const newmessage = await messagesModels.create(obj)
        return newmessage
        }
        catch (error){
            return error
        }
    }}

    export const messagesMongo = new MessagesMongo()