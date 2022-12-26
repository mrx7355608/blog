export default function buildPatchUnPublishBlog({ unPublishBlogs }) {
    return async function (httpRequest) {
        const id = httpRequest.params.id;
        await unPublishBlogs(id);
        return {
            statusCode: 200,
            body: { message: "Blog has been un published" },
        };
    };
}
