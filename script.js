import express from 'express';

const app = express()

app.set("view engine","ejs");
app.use(express.static('./public'))

app.get("/",(req,res) =>{
  res.render("index");
})

// // middelware
// app.use((req,res,next) =>{
//   console.log("Hello from Middelware1");
//   // The next() function is used to push the request to the next route.if their is another middleware after this middleware then the next middelware will run and after that it will go to route .
//   next(); // Pass control to the next function (Crucial! Without this, the server hangs)
// })

// app.use((req,res,next)=>{
//   console.log("Heloo from middleware2");
//   next();
// })

// app.get('/',(req,res) =>{
//   res.send('Hello swatii')
// })

// app.get('/profile/:username',(req,res) =>{
//   res.send(`Hello from ${req.params.username}`)
// })

// app.get('/contact/:userno',(req,res) =>{
//   res.send(`Hey your contact no is this ${req.params.userno}`)

// })

// app.get('/about/:userinfo',(req,res) =>{
//   res.send(`Heloo my name is ${req.params.userinfo}`)
// })

// app.get('/contact',(req,res)=>{
//   res.send('Hello from contact')
// })

app.listen(3000);