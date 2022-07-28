const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();
app.use(express.static("staticgroup"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
})
app.post("/",function(req,res){
var firstName=req.body.fname;
var secondName=req.body.lname;
var email= req.body.email;
console.log(firstName);
})
app.listen("3000");
