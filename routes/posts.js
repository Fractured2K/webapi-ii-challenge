const router = require("express").Router();

const Post = require("../data/db");

// Create post
router.post("/", async (req, res) => {
	try {
		const post = req.body;

		// check for empty post title or contents
		if (!post.title || !post.contents)
			return res.status(400).json({
				errorMessage: "Please provide title and contents for the post."
			});

		const newPost = await Post.insert(post);
		res.status(201).json(newPost);
	} catch (err) {
		res.status(500).json({
			error: "There was an error while saving the post to the database"
		});
	}
});

// Get posts
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json({
			error: "The posts information could not be retrieved."
		});
	}
});

module.exports = router;
