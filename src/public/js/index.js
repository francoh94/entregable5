const socketClient = io();

const email = document.getElementById('email');
const messages = document.getElementById('messages');
const formulario = document.getElementById('formulario');
const messagesContainer = document.getElementById('messagesContainer'); 

formulario.onsubmit = (e) => {
  e.preventDefault();

  const infoMensaje = {
    user: email.value,
    message: messages.value,
  };

  socketClient.emit('message', infoMensaje);
  messages.value = '';
};

socketClient.on('message', (receivedMessage) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');

  const userElement = document.createElement('p');
  userElement.textContent = `Usuario: ${receivedMessage.user}`;

  const messageContentElement = document.createElement('p');
  messageContentElement.textContent = `Mensaje: ${receivedMessage.message}`;

  messageElement.appendChild(userElement);
  messageElement.appendChild(messageContentElement);

  messagesContainer.appendChild(messageElement);
});

