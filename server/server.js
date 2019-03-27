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

app.get('/',function(req,res){
  res.render('index.html');
})

app.get('/login', function(req, res){
  res.send('Login Route');
})

app.get('/regitser', function(req, res){
  res.send('Register Route');
})

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

  socket.on('createMessage', function(message){
      console.log(message);
      io.emit('newMessage',{
        from : message.from,
        text : message.text,
        createdAt: new Date().getTime()
      })
  })
});

server.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});