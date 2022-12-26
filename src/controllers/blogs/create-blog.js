export default function buildCreateBlog({ addBlogs }) {
    return async function (httpRequest) {
        try {
            const blogData = httpRequest.body;
            const newBlog = await addBlogs(blogData);
            return {
                statusCode: 201,
                body: newBlog,
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
