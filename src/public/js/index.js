const socketClient = io()

const email = document.getElementById('email')
const messages = document.getElementById('messages')
const fomulario = document.getElementById('formulario')

fomulario.onsubmit = (e)=> {
    e.preventDefult()
    const infoMensaje = {
    user : correoDelUsuario,
    message: messages.value
    }
    socketClient.emit('messages', infoMensaje)
} 
socketClient.on('messages', messages=>{console.log(messages) })