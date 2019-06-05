// jshint esversion:6

const express = require('express');
// const bodyParser = require("body-parser");

const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));




app.get("/",function(req,res){
  res.sendfile(__dirname + "/index.html");
});

// app.get("/bmicalculator",function(req, res){
//   res.sendfile(__dirname + "/bmiCalculator.html");
// });

app.get("/bmicalculator", function(req, res){
  res.sendfile(__dirname + "/bmiCalculator.html");
});

// app.post("/bmicalculator",function(req, res){
//   var height=parseFloat(req.body.height);
//   var weight=parseFloat(req.body.weight);

app.post("/bmiCalculator", function(req, res){
  var height=parseFloat(req.body.height);
  var weight=parseFloat(req.body.weight);


  var BMI = weight/(height*height);
res.send("your BMI is " + BMI);

});

// app.post("/bmicalculator",function(req,res){
//
//   console.log(req.body);
// res.send("I love you ");
//
// });

app.listen(3000,function(){
  console.log("im runing on port 300");
});
