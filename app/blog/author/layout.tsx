import React from "react";

const AuthorLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div>
			This page is only for author
			{children}
		</div>
	)
}

export default AuthorLayout;