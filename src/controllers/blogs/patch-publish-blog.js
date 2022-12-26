export default function buildPatchPublishBlog({ publishBlogs }) {
    return async function (httpRequest) {
        const id = httpRequest.params.id;
        const publishedBlog = await publishBlogs(id);
        return {
            statusCode: 200,
            body: { blog: publishedBlog },
        };
    };
}
