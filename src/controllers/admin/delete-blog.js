export default function buildDeleteBlog({ removeBlogs }) {
    return async function (httpRequest) {
        const id = httpRequest.params.id;
        await removeBlogs(id);
        return {
            statusCode: 204,
            body: null,
        };
    };
}
