import React from 'react';

const MyServerComponent = async () => {

	const data = await fetch("https://jsonplaceholder.typicode.com/comments")
	const postData = await data.json()

	console.log(postData);
	return (
		<div>

		</div>
	);
};

export default MyServerComponent;