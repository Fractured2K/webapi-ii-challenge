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

// Get post by id
router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const post = await Post.findById(id);

		// if post doesnt exist return 404
		if (!post)
			return res.status(404).json({
				message: "The post with the specified ID does not exist."
			});

		// return post
		return res.status(200).json(post);
	} catch (err) {
		res.status(500).json({
			error: "The post information could not be retrieved."
		});
	}
});

// Update post
router.put("/:id", async (req, res) => {
	try {
		const post = req.body;
		const id = req.params.id;

		// check for empty post title or contents
		if (!post.title || !post.contents)
			return res.status(400).json({
				errorMessage: "Please provide title and contents for the post."
			});

		const updatedPost = await Post.update(id, post);

		// return 404 if post doesnt exist
		if (!updatedPost)
			return res.status(404).json({
				message: "The post with the specified ID does not exist."
			});

		// return updated post
		return res.status(200).json(updatedPost);
	} catch (err) {
		res.status(500).json({
			error: "The post information could not be modified."
		});
	}
});

// Delete post
router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;

		const post = await Post.findById(id);
		const deleted = await Post.remove(id);

		// if post doesnt exist return 404
		if (!deleted)
			return res.status(404).json({
				message: "The post with the specified ID does not exist."
			});

		// return deleted post id
		return res.status(200).json(post);
	} catch (err) {
		res.status(500).json({ error: "The post could not be removed" });
	}
});

module.exports = router;
