'use strict'

const mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	UsersSchema = new Schema(
		{
			email: "String",
			name: "String",
			password: "String",
			pets: [String],
		},
		{
			collection: "users",
		}
	),
	UsersModel = mongoose.model("Users", UsersSchema);

module.exports = UsersModel;