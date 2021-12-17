const mongoose = require('mongoose');

const mongoSchema=mongoose.Schema({
name:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},

phone:{
     type:String,
     required:true
},

mobilePhone:{
    type:String,
    required:true
},

email:{
    type:String,
    required:true
}

});

module.exports=mongoose.model('Posts',mongoSchema);
    