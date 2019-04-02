const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
var PORT = process.env.PORT || 3000

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

// app.get('/',function(req,res){
//   res.render('index.html');
// })

// app.get('/login', function(req, res){
//   res.send('Login Route');
// })

// app.get('/regitser', function(req, res){
//   res.send('Register Route');
// })

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

  socket.on('client', function(message){
      console.log(message);
  })

  socket.emit('server',{
    name: 'Hrithik Naha',
    subject: 'text',
    dateCreated: new Date().toDateString(),
    text: 'Sending messgae from server to client'
  })

  socket.emit('server',{
    name: 'Testing Part two',
    dateCreated: new Date().toDateString(),
    text: 'Sending messgae from server to client'
  })

  socket.emit('server',{
    text: 'Lorem'
  })
});

server.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});