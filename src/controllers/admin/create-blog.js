export default function buildCreateBlog({ addBlogs }) {
    return async function (httpRequest) {
        const blogData = httpRequest.body;
        await addBlogs(blogData);
        return {
            statusCode: 201,
            body: { message: "Blog created successfully" },
        };
    };
}
