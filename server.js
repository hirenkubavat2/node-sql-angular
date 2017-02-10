const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
var Sequelize = require('sequelize');

app.get('/',(req,res)=>{
	// res.send('Hello this is from server.js'+ __dirname );
	res.sendFile(__dirname + '/index.html');

});




// var mongojs=require('mongojs');
/*var db=mongojs('contactlist',['contactlist']);
app.use(express.static(__dirname+'/public'));*/

app.listen(3000);
console.log('the server is running on port 3000');


// mongo ds147069.mlab.com:47069/my-app -u <dbuser> -p <dbpassword>

app.post('/quotes',(req,res)=>{


});