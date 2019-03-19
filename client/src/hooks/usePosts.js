import { useState, useEffect } from "react";
import axios from "axios";

// api endpoint for posts
const endpoint = `http://localhost:30001/api/posts`;

const usePosts = () => {
	const [posts, setPosts] = useState([]);

	// Acts like component did mount
	useEffect(() => {
		getAllPosts();
	}, []);

	const getAllPosts = async () => {
		// Destructure data from of response
		const { data } = axios.get(endpoint);

		setPosts(data);
	};

	return {
		posts,
		getAllPosts
	};
};
