const express=require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mongopost=require('../models/mongopost');
const router=express.Router();






//Kayıt ekleme
router.post('/', async (req,res)=>{
    const user1 =await mongopost.find({name:req.body.name}); 
    if(user1==""){
  const post=new mongopost({

       
      name:req.body.name,
      address:req.body.address,
      phone:req.body.phone,
      mobilePhone:req.body.phone,
      email:req.body.email
    });
    post.save()
    .then (data=>{
        res.json(data); 
    })
    .catch(err=>{
        res.json({message:err})
    });
  }else(err=>{
      res.json(err)
  })
  
      
           

});
// Kayıt getirme
router.get('/:postName', async(req,res)=>{
    try
    {
        const post=await mongopost.find({name:req.params.postName}); 
        res.json(post);
    }catch (err)
    {
        res.json({message:err})
    }
});

//Kayıt silme

router.delete("/:name", async (req,res)=>{
    try{
        const deletePost=await mongopost.remove({name:req.params.name});
        res.json(deletePost);
    }catch (err)
    {
        res.json({message:err})
    }

});
// Kayıt güncelleme
router.patch("/:Name", async (req,res)=>{
    try{
        const patchPost=await mongopost.updateOne(
            {name:req.params.Name},
            {$set:{name:req.body.name,
                 address:req.body.address,
                 phone:req.body.phone,
                 mobilePhone:req.body.mobilePhone,
                email:req.body.email}} 
            
            
        );
        res.json(patchPost);
        
    }catch (err)
    {
        res.json({message:err})
    }

});
module.exports=router;