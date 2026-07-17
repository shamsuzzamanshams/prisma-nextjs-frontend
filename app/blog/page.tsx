import React from "react";
import MyServerComponent from "../ui/MyServerComponent";
import { getBlogs } from "../service/getBlogs";


const blogpage = async () => {

	const blogs = await getBlogs();

	console.log(blogs);


	return (
		<div>

			blog
			{
				blogs.map((blog : any) =>(
					<div key={blog.id}>
						<h2>{blog.title}</h2>
						<p>{blog.body}</p>

					</div>
				))
			}
			<MyServerComponent></MyServerComponent>
		</div>
	)
}

export default blogpage;