import { useState, useEffect } from "react";
import axios from "axios";

// api endpoint for posts
const endpoint = `http://localhost:3001/api/posts`;

const usePosts = () => {
	const [posts, setPosts] = useState([]);

	// Acts like component did mount
	useEffect(() => {
		getAllPosts();
	}, []);

	const getAllPosts = async () => {
		// Destructure data from of response
		const { data } = await axios.get(endpoint);

		// Set reponse data to posts state
		setPosts(data);
	};

	return {
		posts,
		getAllPosts
	};
};

export default usePosts;
