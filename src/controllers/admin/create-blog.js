export default function buildCreateBlog({ addBlogs }) {
    return async function (httpRequest) {
        const blogData = httpRequest.body;
        const newBlog = await addBlogs(blogData);
        return {
            statusCode: 201,
            body: newBlog,
        };
    };
}
