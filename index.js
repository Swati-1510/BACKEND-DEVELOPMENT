var express = require('express');
var router = express.Router();
const userModel = require("./users");
const { request } = require('../app');

// this below two lines helps user to login and can use our localstrategy.
const passport = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));

// router.get("/",(req,res) =>{
//   res.render("index");
// });


// // create
// router.get("/create",async(req,res)=>{
//   const createduser = await userModel.create({
//     username:"swatim",
//     age : 20,
//     name :"swati"
//   });
//   res.send(createduser);
// })

// // Read
// router.get("/allusers",async (req,res) =>{
//   let alluser = await userModel.find();
//   res.send(alluser);
// });

// //read (find one)
// router.get("/oneuser",async (req,res)=>{
//   const oneuser = await userModel.findOne({username:"swatim"});

//   res.send(oneuser);
// });

// //Delete
// router.get("/delete",async(req,res)=>{
//   let deleteduser = await userModel.findOneAndDelete({
//     username:"swatim"
//   });
//   res.send(deleteduser);
// });

// //session created
// router.get("/",(req,res)=>{
//   req.session.ban = true;
//   res.render("index");
// });

// //session read
// router.get("/checkban",(req,res)=>{
//   if(req.session.ban === true){
//     res.send("you are banned");
//   }
//   else{
//     res.send("not banned");
//   }
// });

// //session delete 
// router.get("/removeban",(req,res) => {
//   req.session.destroy((err)=>{
//     if(err) throw err;
//     res.send("banned removed")
//   });
// });
  //cookies created
// router.get("/",(req,res)=>{
//   res.cookie("age",25);
//   res.render("index");
// });

//   //cookies read
// router.get("/read",(req,res)=>{
//   console.log(req.cookies.age);
//   res.send("check");
// });

// //delete cookie
// router.get("/delete",(req,res)=>{
//   res.clearCookie("age");
//   res.send("clear");
// });



//Flash Mesaages
// router.get("/failed",(req,res)=>{
//   req.flash("age",12);
//   req.flash("name","swati");
//   res.send("Created");
// });

// router.get("/check",(req,res)=>{
//   console.log(req.flash("age"),req.flash("name"));
//   res.send("check terminal")
// });


//case sensitive in mongodb -
// router.get("/create",async(req,res) => {
//   const userdata = await userModel.create({
//     username : "Shree",
//     name : "Shreeraj",
//     description : "I love saku",
//     categories : ["Ai eng","app developer","Ai developer"],
//   });
//   res.send(userdata);
// });

// router.get("/find",async(req,res)=>{
//   let regex = new RegExp("^shree$",'i');
//   let userfind = await userModel.findOne({username: regex});
//   res.send(userfind);
// });

//find documents where an array field contains all of a set of values.
// router.get("/find",async(req,res)=>{
//   let userfind = await userModel.find({categories: {$all:["app developer"] }});
//   res.send(userfind);
// });


//Search documents with a specific date range in mongoose
// router.get("/find",async(req,res)=>{
//   //date format ('yyyy-mm-dd')
//   var date1 = new Date('2026-06-15');
//   var date2 = new Date('2026-06-16');
//   let user = await userModel.find({datecreated:{$gte: date1,$lte : date2}});
//   res.send(user);
// });

//Filter documents based on the existance of a field in mongoose.

// router.get("/find",async(req,res)=>{
//   let user = await userModel.find({categories : {$exists:true}});
//   res.send(user);
// });

// Filter documents based on a specific fields length in mongoose.
// router.get("/find",async(req,res)=>{
//   let user = await userModel.find({
//     $expr:{
//       $and:[
//         {$gte : [{$strLenCP: '$name'},1]},
//         {$lte :[{$strLenCP:'$name'},15]},
//       ]
//     }
//   });
//   res.send(user);
// });

router.get("/profile", isLoggedIn,(req,res)=>{
  res.render('profile');
})

//register route
router.post('/register',(req,res)=>{
  let userdata = new userModel({
    username : req.body.username,
    secret : req.body.secret
  });

  userModel.register(userdata,req.body.password)
     .then((registereduser)=>{
      passport.authenticate("local")(req,res,()=>{
        res.redirect('/profile');
      })
     })
});

//log in
router.post("/login",passport.authenticate("local",{
  successRedirect: "/profile",
  failureRedirect:"/"
}),(req,res)=>{});


//logout
app.get('/logout',(req,res,next)=>{
  req.logout((err)=>{
    if(err) { return next(err); }
    res.redirect("/");
  });
});

//IsLoggedIn Middleware
const isLoggedIn = (req,res,next)=>{
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
};


module.exports = router;

