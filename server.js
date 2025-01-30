import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { Configuration, OpenAIApi } from 'openai';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const openaiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(openaiConfiguration);

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    socket.on('mensaje', async (data) => {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: data,
            max_tokens: 50,
        });

        io.emit('respuesta', response.data.choices[0].text.trim());
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
