const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
	author: String,
	message: String,
	date: Date,
});

module.exports = mongoose.model("Message", messageSchema);
