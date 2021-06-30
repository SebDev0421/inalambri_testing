'use strict'

const mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	SellersSchema = new Schema(
		{
			service: "String",
			nameShop: "String",
			year:Number,
			month:{type: Number, min: 1, max: 12},
			sales:Number
		},
		{
			collection: "sellers",
		}
	),
	SellersModel = mongoose.model("Sellers", SellersSchema);

module.exports = SellersModel;