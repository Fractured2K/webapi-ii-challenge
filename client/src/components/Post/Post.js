import React from "react";

const Post = props => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.contents}
		</div>
	);
};

export default Post;
