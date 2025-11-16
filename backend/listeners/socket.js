const { Server } = require("socket.io");
const { roomSocketHandler } = require("./room");
const { chatSocketHandler } = require("./chat");
const { userSocketHandler } = require("./user");
const { socketAuth } = require("./middleware");

let io;
const userSockets = new Map(); // Maps userId to a Set of socket.id's
const onlineUsersInfo = new Map(); // Maps userId to user info object

function initSocket(server) {
    io = new Server(server, {
        cors: {
            origin: process.env.FRONTEND_URL || "http://localhost:5173",
            methods: ["GET", "POST"],
            credentials: true
        }
    });
    // Middleware for authentication
    io.use(socketAuth);
    // Main connection handler
    io.on('connection', (socket) => {
        userSocketHandler(io, socket, userSockets, onlineUsersInfo);
        chatSocketHandler(io, socket);
        roomSocketHandler(io, socket, userSockets);
    });
    console.log("Socket.IO is working!");
    return io;
}

module.exports = { initSocket, io };
