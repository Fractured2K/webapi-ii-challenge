import React from "react";

// Components
import Post from "./Post";

const PostList = props => {
	return (
		<div className="post-list">
			{props.posts.map(post => (
				<Post key={post.id} {...post} />
			))}
		</div>
	);
};

export default PostList;
