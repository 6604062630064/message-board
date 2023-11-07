var express = require("express");
var router = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];
/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { messages });
});

router.post("/new", (req, res, next) => {
	const messageText = req.body.message;
	const messageUser = req.body.author;
	messages.push({ text: messageText, user: messageUser, added: new Date() });
	res.redirect("/");
});
module.exports = router;
