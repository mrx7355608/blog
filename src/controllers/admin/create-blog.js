export default function buildCreateBlog({ addBlogs }) {
    return async function (httpRequest) {
        try {
            const blogData = httpRequest.body;
            await addBlogs(blogData);
            return {
                statusCode: 201,
                body: { message: "Blog created successfully" },
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
