var express = require('express');

var app = express();


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/dist/class1ng/index.html');
})

app.use(express.static(__dirname + '/dist/class1ng'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log("server started ..."));