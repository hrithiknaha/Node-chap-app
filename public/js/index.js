var socket = io();

socket.on('connect', function(){
    console.log('Connected to Server');
})

socket.on('disconnect', function(){
    console.log('Disconnected from the server');
})

socket.emit('client',{
    text: 'Sending from client to server',
    date : new Date().toDateString()
})

socket.on('server', function(message){
    console.log(message);
})