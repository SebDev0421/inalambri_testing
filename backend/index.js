'use strict'


const express = require('express'),
      PORT = (process.env.PORT || 5000),
      app = express(),
      login = require('./Routes/Login')  



app.set('port',PORT)

app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});


app.use('/api/login',login)


app.listen(app.get('port'),()=>{
	console.log('SERVER runnig in port:',app.get('port'))
})