
const mongoose = require("mongoose");

//localhost:3000 -> same concept for mongodb to connect to server 127.0.0.1 : this is server and 27017 is the port number 
mongoose.connect("mongodb://127.0.0.1:27017/GitIntelDB")
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch(err => console.error("Could not connect to MongoDB:", err));

const userSchema = mongoose.Schema({
  username : String,
  password : String,
  secret : String,
  // name : String,
  // description : String,
  // categories : [],
  // datecreated: {
  //   type : Date,
  //   default:Date.now()
  // }
});

userSchema.plugin(plm);

module.exports = mongoose.model("user",userSchema);