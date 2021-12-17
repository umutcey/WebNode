const mongoose=require('mongoose');
const baglanti= "mongodb+srv://ucey:Ucey98.@cluster0.t73a0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(baglanti,{useNewUrlParser:true},function(err)
{
    if(err) throw err;
    console.log("Baglanti basarili");
});