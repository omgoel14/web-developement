const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
let items=["but food","cook","eat"];
let workItems=[];
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.get("/", function(req, res) {
  var today = new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day=today.toLocaleDateString("en-US",options);
  res.render("list",{listTitle:day,newListItems:items});
});
app.post("/",function(req,res){
  let item=req.body.newItem;
  if(req.body.list==="work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work",function(req,res){
  res.render("list",{listTitle:"work list",newListItems:workItems});
});
app.post("/work",function(req,res){

});
app.listen(3000, function() {
  console.log("server started on port 3000");
});
