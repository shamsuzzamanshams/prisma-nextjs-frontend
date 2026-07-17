import React from "react";
import MyServerComponent from "../ui/myServerComponent";

const blogpage = async () => {

	const data = await fetch("https://jsonplaceholder.typicode.com/comments")
	const postData = await data.json()

	console.log(postData);
	
	return (
		<div>
			
			blog
			<MyServerComponent></MyServerComponent>
		</div>
	)
}

export default blogpage;