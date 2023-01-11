export default function buildPatchPublishBlog({ publishBlogs }) {
    return async function (httpRequest) {
        try {
            const id = httpRequest.params.id;
            await publishBlogs(id);
            return {
                statusCode: 200,
                body: { message: "Blog has been published" },
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
