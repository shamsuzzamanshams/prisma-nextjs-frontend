export const getBlogs = async () => {

	"use cache";

	const data = await fetch("https://jsonplaceholder.typicode.com/comments", {
		method: "POST",
		cache: "force-cache",
		next: {
			revalidate: 60 * 60 * 24
		}
	})
	const postData = await data.json()

	console.log(postData);
	return postData;
}