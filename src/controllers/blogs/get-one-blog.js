export default function buildGetOneBlog({ listOneBlog }) {
    return async function (httpRequest) {
        const id = httpRequest.params.id;
        const blog = await listOneBlog(id);
        return {
            statusCode: 200,
            body: blog,
        };
    };
}
