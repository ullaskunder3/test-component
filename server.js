const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRoute = require('./postRoute');

mongoose.connect('mongodb://localhost:27017/testpostdb', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('db is connected...');
}).catch(()=>{
    console.log('Somethinhg went wrong');
})

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/', postRoute);
app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.end('Hello');
})
app.listen(5050, ()=>{
    console.log('Server is listning on the port 5050');
})