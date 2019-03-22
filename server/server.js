const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
var PORT = process.env.PORT || 3000

var app = express();

app.use(express.static(publicPath))

app.get('/', function(req, res){
    res.render('index.html')
})



app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}.`);
})