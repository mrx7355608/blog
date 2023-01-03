export default function buildUpdateBlog({ editBlogs }) {
    return async function (httpRequest) {
        try {
            const changes = httpRequest.body;
            const id = httpRequest.params.id;
            const updatedBlog = await editBlogs(id, changes);
            return {
                statusCode: 200,
                body: { blog: updatedBlog },
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
