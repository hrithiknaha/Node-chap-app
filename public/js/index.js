var socket = io();

socket.on('connect', function(){
    console.log('Connected to Server');
})

socket.on('disconnect', function(){
    console.log('Disconnected from the server');
})

socket.on('newMessage', function(message){
    console.log("Message :",message);
})