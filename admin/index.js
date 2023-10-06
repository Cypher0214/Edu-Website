const express = require('express');
// const cors = require('/cors');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://pathakchinmay02:chinurahulrocks@cluster0.4aqvrus.mongodb.net/sample?retryWrites=true&w=majority',{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});  


const UserSchema =new mongoose.Schema(
  {
     name : String,
  }
)

const UserModel = mongoose.model('User', UserSchema);
app.get('/yashlodu',(req,res) => {
            
  UserModel.find({}).then(function(users){
     res.status(200).json("api is running");
  }).catch(function(err)
  {
     console.error(err);
  });
    
});

app.get('/add',async(req,res) => {
  const newuser=new UserModel({
    name:"porwal"
  });

  await newuser
          .save()
          .then(() => {
            return res.status(200).send("User Sucessfully Registered");
          })
          .catch((err) => {
            return res.status(404).send("Internal Error");
          });
  // UserModel.find({}).then(function(users){
  //    res.status(200).json("api is running");
  // }).catch(function(err)
  // {
  //    console.error(err);
  // });
    
});


app.listen(3000, () => {
 
  console.log(" server is running on port 3000"); 

});