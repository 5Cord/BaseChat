import express from "express";
import server from "http";
import cors from "cors";
import { Server } from "socket.io"; // Правильный импорт для socket.io

const app = express();
const http = server.createServer(app);

const socketIo = new Server(http, {
    cors: {
        origin: 'http://localhost:5173'
    }
})
const PORT = 5000;


// Определение маршрута
app.get('/api', (req, res) => {
    res.json({
        message: `Server started on port ${PORT}`
    });
});

socketIo.on('connection', (socket) => {
    console.log(`${socket.id} user connected`)
    socket.on('message', (data) => {
        socketIo.emit('response', data)
    })
    socket.on('disconnect', () => {
        console.log(`${socket.id} user disconnect`)
    })
})


// Запуск сервера
http.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
