import express from 'express';

const app = express()

// middelware
app.use((req,res,next) =>{
  console.log("Hello from Middelware1");
  // The next() function is used to push the request to the next route.if their is another middleware after this middleware then the next middelware will run and after that it will go to route .
  next(); // Pass control to the next function (Crucial! Without this, the server hangs)
})

app.use((req,res,next)=>{
  console.log("Heloo from middleware2");
  next();
})

app.get('/',(req,res) =>{
  res.send('Hello swatii')
})

app.get('/profile',(req,res) =>{
  res.send('Hello from profile')
})

app.get('/contact',(req,res)=>{
  res.send('Hello from contact')
})

app.listen(3000);