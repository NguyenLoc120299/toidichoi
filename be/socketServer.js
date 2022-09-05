let users = []

const SocketServer = (socket) => {
  ///like review
  socket.on('joinUser', user => {
    users.push({ id: user._id, socketId: socket.id })
    console.log(users);
  })
  socket.on('createNotify', msg => {
    const client = users.find(user => msg.recipients.includes(user.id))
    client && socket.to(`${client.socketId}`).emit('createNotifyToClient', msg)
  })
  socket.on('removeNotify', msg => {
    const client = users.find(user => msg.recipients.includes(user.id))
    client && socket.to(`${client.socketId}`).emit('removeNotifyToClient', msg)

  })

}
module.exports = SocketServer;