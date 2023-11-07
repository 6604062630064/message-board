var express = require("express");
var router = express.Router();
const messageModel = require("../model/message");
// const messages = [
// 	{
// 		text: "Hi there!",
// 		user: "Amando",
// 		added: new Date(),
// 	},
// 	{
// 		text: "Hello World!",
// 		user: "Charles",
// 		added: new Date(),
// 	},
// ];
/* GET home page. */
router.get("/", async function (req, res, next) {
	const messages = await messageModel.find();
	res.render("index", { messages });
	// res.json(messages);
});

router.post("/new", async (req, res, next) => {
	// const messageText = req.body.message;
	// const messageUser = req.body.author;
	const data = new messageModel({
		author: req.body.author,
		message: req.body.message,
		date: new Date(),
	});
	// messages.push({ text: messageText, user: messageUser, added: new Date() });
	try {
		const dataToSave = await data.save();
		res.redirect("/");
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
module.exports = router;
