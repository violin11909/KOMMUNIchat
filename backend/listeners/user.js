const userSocketHandler = (io, socket, userSockets, onlineUsersInfo) => {
    const userId = socket.data.user._id.toString();
    console.log(`🟢 User '${socket.data.user.name}' connected with socket ${socket.id}`);

    if (!userSockets.has(userId)) {
        userSockets.set(userId, new Set());
        onlineUsersInfo.set(userId, {
            _id: socket.data.user._id,
            name: socket.data.user.name,
            profile: socket.data.user.profile
        });
    }

    userSockets.get(userId).add(socket.id);

    io.emit('update-online-users', Array.from(onlineUsersInfo.values()));

    socket.on('get-online-users', () => {
        socket.emit('update-online-users', Array.from(onlineUsersInfo.values()));
    });

    [...socket.rooms].forEach(r => r !== socket.id && socket.leave(r));

    socket.on('disconnect', () => {
        console.log(`🔴 User '${socket.data.user.name}' with socket ${socket.id} disconnected`);

        const userSocketSet = userSockets.get(userId);
        if (userSocketSet) {
            userSocketSet.delete(socket.id);

            if (userSocketSet.size === 0) {
                console.log(`Now User's socket size is 0, User '${socket.data.user.name}' is now fully offline.`);
                userSockets.delete(userId);
                onlineUsersInfo.delete(userId);
                // Broadcast the updated online users list
                io.emit('update-online-users', Array.from(onlineUsersInfo.values()));
            }
        }
    });
};

module.exports = { userSocketHandler };