export default function buildDeleteBlog({ removeBlogs }) {
    return async function (httpRequest) {
        try {
            const id = httpRequest.params.id;
            await removeBlogs(id);
            return {
                statusCode: 204,
                body: null,
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
