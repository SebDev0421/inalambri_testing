const express = require('express'),
      app = express.Router(),
      Sellers = require('../Models/Sellers')


app.post('/consultSalesDetailing',async(req,res)=>{
	
	res.json({status:200,payload:await Sellers.find(req.body)})
})

app.put('/fillSales',async(req,res)=>{
	const {service,nameShop,year,month,sales} = req.body

	console.log(service,nameShop,year,month,sales)
	const sellers = new Sellers({service,nameShop,year,month,sales})
	try{
	   await sellers.save()	
	}catch(err){
		return res.status(400).json({status:400,message:"error upload"})
	}
	

	res.json({status:200})

})


module.exports = app
