let users = []

const SocketServer = (socket) => {
  ///like review
  socket.on('joinUser', user => {
    users.push({ id: user._id, socketId: socket.id })
  })
  socket.on('createNotify', msg => {
    const client = users.find(user => msg.recipients.includes(user.id))
    client && socket.to(`${client.socketId}`).emit('createNotifyToClient', msg) 
  })
}
module.exports = SocketServer;