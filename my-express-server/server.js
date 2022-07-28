const express=require('express');
const app=express();
app.get("/",function(req,res){
  res.send("<h1>Hello,World</h1>");
});
app.get("/contact",function(req,res){
  res.send("contact me at 9030****80");
});//to acess tgis we need to go to localhost:3000/contact
app.listen(3000,function(){
  console.log("started listening 3000 port");
});
