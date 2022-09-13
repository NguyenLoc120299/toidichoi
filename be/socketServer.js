let users = []

const SocketServer = (socket) => {
  ///like review
  socket.on('joinUser', user => {
    users.push({ id: user._id, socketId: socket.id })

  })
  socket.on('createNotify', msg => {
    const client = users.find(user => msg.recipients.includes(user.id))
    console.log(msg,client);
    client && socket.to(`${client.socketId}`).emit('createNotifyToClient', msg) 
  })
  socket.on('removeNotify', msg => {
    const client = users.find(user => msg.recipients.includes(user.id))
    client && socket.to(`${client.socketId}`).emit('removeNotifyToClient', msg)
  })
}
module.exports = SocketServer;