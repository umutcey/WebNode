const express = require('express');
const mongoose=require('mongoose');
const postRoute=require('../routes/posts');
const bodyParser=require('body-parser');
const app = express();



const baglanti= "mongodb+srv://ucey:Ucey98.@cluster0.t73a0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use('/posts', postRoute);




console.log('ornek');

mongoose.connect(baglanti,{useNewUrlParser:true},function(err)
{
    if(err) throw err;
    console.log("Baglanti basarili");
});

 app.get("/", (reg,res)=>{
     res.send("Merhaba Dünya");
 }) ;





app.listen(2900);