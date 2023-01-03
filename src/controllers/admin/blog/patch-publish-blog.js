export default function buildPatchPublishBlog({ publishBlogs }) {
    return async function (httpRequest) {
        const id = httpRequest.params.id;
        await publishBlogs(id);
        return {
            statusCode: 200,
            body: { message: "Blog has been published" },
        };
    };
}
