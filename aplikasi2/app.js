const express=require('express');
const app=express();
const port=3000;

//Membuat Route jke halaman dengan method GET
app.get('/',(req,res)=>{
    res.send('Hello, ini halaman HOME dengan method GET!');
});

//Membuat muddleware untuk menerima request body dari json
app.use(express.json());
//Membuat Route ke halaman submit dengan method POST
app.post('/submit',(req,res)=>{
    const {name, npm, jeniskelamin}=req.body.name;
    req.send(`Hello, ${name} dengan NPM ${npm}. Apakah kamu ${jeniskelamin}?`);
});
//Serving Static file
app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/index.html`);
});
