export default function buildGetOneBlog({ listOneBlog }) {
    return async function (httpRequest) {
        const id = httpRequest.params.id;
        const blog = await listOneBlog(id);
        if (!blog.published) {
            return {
                statusCode: 404,
                body: { error: "Not found" },
            };
        }
        return {
            statusCode: 200,
            body: blog,
        };
    };
}
