var socket = io();

socket.on('connect', function(){
    console.log('Connected to Server');

    socket.emit('createMessage',{
        to: "me@hrithik.com",
        text: "Boom",
        createdAt: 248784
    })
})

socket.on('disconnect', function(){
    console.log('Disconnected from the server');
})

socket.on('newMessage', function(message){
    console.log(message);
})