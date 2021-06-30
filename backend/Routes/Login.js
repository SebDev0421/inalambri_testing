'use strict'


const express = require('express'),
      app = express.Router()


app.put('/createUser', async (req,res)=>{

	const {name,email,password} = req.body;

	//get photo,name,email,password

	console.log(name,email,password)

	res.json({status:"user was create"})
})


app.get('/getUser', async(req,res)=>{

	const {email,password} = req.body;

	//consult dataBases

	console.log(email,password)



	res.json({status:"data user"})
})



module.exports = app

