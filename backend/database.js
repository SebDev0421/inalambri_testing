'use strict'

"use strict";

const mongoose = require("mongoose"),
	  URI = "mongodb://localhost/inalambria";

mongoose
	.connect(URI)
	.then(() => {
		console.log("DB Connect was connect");
	})
	.catch((err) => {
		if (err) throw err;
	});

mongoose.set("useFindAndModify", true);

module.exports = mongoose;