const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require ('cors');
const knex = require ('knex');

const register = require('./controller/register');
const signin = require('./controller/signin');
const image = require('./controller/image');
const profile = require('./controller/profile');



const db = knex({
	client:'pg',
	connection:{
		host: '127.0.0.1',
		user:'badri',
		password: '',
		database:'ayan'
	}
});

const app = express();
app.use(bodyParser.json());
app.use(cors());



app.get('/',(req, res)=>{
	res.send(database.users);
})

app.post('/signin',signin.handleSignin(db,bcrypt))

app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)})


app.get('/profile/:id',(req,res)=>{profile.handleProfileGet(req,res,db)})


app.put('/image', (req,res)=>{image.handleImage(req,res,db)})

app.post('/imgUrl',(req,res)=>{image.handleApiCall(req,res)})


app.listen(3001,()=>{
	console.log('app is running');
})