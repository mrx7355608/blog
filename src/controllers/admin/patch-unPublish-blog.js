export default function buildPatchUnPublishBlog({ unPublishBlogs }) {
    return async function (httpRequest) {
        try {
            const id = httpRequest.params.id;
            await unPublishBlogs(id);
            return {
                statusCode: 200,
                body: { message: "Blog has been un published" },
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
