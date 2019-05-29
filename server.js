const express = require('express');
var app = express();

const hbs =require('hbs');
require('./hbs/helpers/helpers');

app.use(express.static(__dirname+'/public')) 
//Expres Hbs ENGINE
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine', 'hbs');

const port = process.env.PORT||3000;

app.get('/',(req, res)=>{

   res.render('home',{
       nombre:'francisco'       
   }); 
});

app.get('/about',(req, res)=>{

    res.render('about'); 
 });


// app.get('/data',(req, res)=>{
//     //res.send(salida);
//     res.send('Hola mundo');
// })

app.listen(port,()=>{console.log(`Escuchando puerto ${port}`);});