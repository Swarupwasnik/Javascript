const exppress = require('express');

const app = exppress();

let port =3000;

app.get('/',function(req,res){
    res.send('<h1>Express</h1>');
})
app.get('/api/data',function(req,res){
    res.send("<h1>Express</h1><p>-<b>Express</b> is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage <b>servers</b> and <b>routes</b>.</p><p></p>");
})

console.log('Its Working');

app.listen(port,function(){ return console.log(`Its working on ${port}`)});