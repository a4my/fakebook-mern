const io = require('socket.io')(8900, {
  cors: {
    origin: 'http://localhost:3000'
  }
})

let users = []

io.on('connection', socket => {
  console.log('a user has connected.')
  //Get userId and socketId from User
})
