import React from "react";

const BlogLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div>
			This page is only for blog
			{children}
		</div>
	)
}

export default BlogLayout;