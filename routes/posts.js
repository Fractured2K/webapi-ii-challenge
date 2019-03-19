const router = require("express").Router();

// Create post
router.post("/", async (req, res) => {
	try {
		const post = req.body;

		// check for empty post title or contents
		if (!post.title || !post.contents)
			return res.status(400).json({
				errorMessage: "Please provide title and contents for the post."
			});
	} catch (err) {}
});

module.exports = router;
