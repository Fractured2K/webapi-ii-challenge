import React from "react";
import "./App.css";

// Hooks
import usePosts from "./hooks/usePosts";

// Components
import PostList from "./components/Post/PostList";

const App = () => {
	const { posts } = usePosts();

	return (
		<div className="container">
			<PostList posts={posts} />
		</div>
	);
};

export default App;
