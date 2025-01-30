import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import '../styles/main.css'

const socket = io('http://localhost:3000');

const Chat = () => {
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
        socket.on('respuesta', (data) => {
            setMensajes((prevMensajes) => [...prevMensajes, { mensaje: data, esRespuesta: true }]);
        });
    }, []);

    const enviarMensaje = () => {
        setMensajes((prevMensajes) => [...prevMensajes, { mensaje, esRespuesta: false }]);
        socket.emit('mensaje', mensaje);
        setMensaje('');
    };

    return (
        <div className='chat-container'>
            <div>
                {mensajes.map((msg, index) => (
                    <p key={index} style={{ textAlign: msg.esRespuesta ? 'left' : 'right' }}>
                        {msg.mensaje}
                    </p>
                ))}
            </div>
            <input
                type="text"
                placeholder='mensaje'
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
            />
            <button onClick={enviarMensaje} title='Enviar'>Enviar</button>
        </div>
    );
};

export default Chat;
