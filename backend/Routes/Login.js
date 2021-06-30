'use strict'


const express = require('express'),
      app = express.Router(),
      Users = require('../Models/User'),
      Bcrypt = require('bcrypt'),
      jwt = require('jsonwebtoken'),
      validator = require('validator'),
      dotenv = require('dotenv');


dotenv.config();


app.put('/createUser', async (req,res)=>{

	const {name,email,password,confirmPassword} = req.body;

	//get name,email,password

	if(!validator.isEmail(email)){
	return res.status(400).json({status:400,message:'El email no es valido'})
}

	if(await Users.exists({email})){
	return res.status(400).json({status:400,message:'El Usuario ya existe'})
}
    
    if(password !== confirmPassword){
      	return res.status(400).json({status:400,message:'Las contraseñas no conciden'})
      }

	const users = new Users({name,email,password: Bcrypt.hashSync(password, 10)})
	try{
		await users.save()

		console.log(process.env.API_KEY)
		const token = jwt.sign(
        { email, name },
        process.env.API_KEY,
        { expiresIn: process.env.TOKEN_EXPIRES_IN },
      );

		return res.status(201).json({ response:token , status:201});

	}catch(err){
		console.log(err)
		return res.status(400).json({
        status: 400,
        message: err
      });
	}
	
})


app.get('/listUsers',async(req,res)=>{
	
	res.json(await Users.find())
})

app.put('/getUser', async(req,res)=>{

	const {email,password} = req.body;
	const statusData = await Users.exists({email})
	if(!statusData){
	  return res.status(400).json({message:'El Usuario no existe',status:400})
    }

    const userRecord = await Users.findOne({email})

	return res.json({status:200,
		             response:Bcrypt.compareSync(password, userRecord.password),
		             credentials:{email:userRecord.email,
		             	          name:userRecord.name}})

})



module.exports = app

