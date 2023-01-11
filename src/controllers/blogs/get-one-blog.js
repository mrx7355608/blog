export default function buildGetOneBlog({ listOneBlog }) {
    return async function (httpRequest) {
        try {
            const id = httpRequest.params.id;
            const blog = await listOneBlog(id);
            if (!blog.published && !httpRequest.user.role === "admin") {
                return {
                    statusCode: 404,
                    body: { error: "Not found" },
                };
            }
            return {
                statusCode: 200,
                body: blog,
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
