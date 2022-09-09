//import library express.js
const express=require('express');

//inisialisasi objek express.js
const app= express();
const port = 3000;//port number

//set view engine menggunakan ejs
app.set('view engine', 'ejs');

//route default ke halaman index
app.get('/',(req,res)=>{
    //render itu untuk merender view template tertentu.
    res.render(__dirname+'/view/index.ejs',{'name':'Irvan','title':'index'});
    res.status(200);
})

//route ke halaman contact
app.get('/contact',(req,res)=>{
    //render templatenya
    res.render(__dirname+'/view/contact.ejs',{'name':'Irvan','title':'contact'});
    res.status(200);
})

//route ke halaman about
app.get('/about',(req,res)=>{
    //render templatenya
    res.render(__dirname+'/view/about.ejs',{'name':'Irvan','title':'about'});
    res.status(200);
})

//mendapatkan parameter-parameter dari sebuah url
app.get('/product/:shelfID/:bookID', (req, res) => {
    const params=req.params;
    res.send(`<p>shelfID is ${params.shelfID}, book id is ${params.bookID}</p>`)
  })

//mendapatkan parameter dan query dari sebuah url
app.get('/product/:productID',(req,res)=>{
    res.send(`productID is: ${req.params.productID}, product name is: ${req.query.name}`)
})

//middleware
app.use('/', (req, res) => {
    res.writeHead(404);
    res.write('not found!');
    res.end();
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})