import { Router } from "express";
import { messagesMongo } from '../dao/messagesMongo.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const messages = await messagesMongo.getMessages();
    if (messages.length) {
      res.status(200).json({ message: "Chat:", data: messages });
    } else {
      res.status(200).json({ message: 'No hay mensajes' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { message, user } = req.body;
  if (!message || !user) {
    return res.status(400).json({ message: "Todos los campos son obligatorios." });
  }
  try {
    const newMessage = await messagesMongo.addMessages(req.body);
    io.emit('message', newMessage);
    res.status(200).json({ message: 'Mensaje agregado con éxito', newMessage });
  } catch (error) {
    res.status(500).json({ message: "Error, no se pudo agregar el mensaje" });
  }
});

export default router;
