export default function buildAdminGetOneBlog({ listOneBlog }) {
    return async function (httpRequest) {
        try {
            const id = httpRequest.params.id;
            const blog = await listOneBlog(id);
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
