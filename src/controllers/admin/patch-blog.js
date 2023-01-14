export default function buildUpdateBlog({ editBlogs }) {
    return async function (httpRequest) {
        const changes = httpRequest.body;
        if (Object.keys(changes).length < 1) {
            throw new Error("Blog changes are not provided");
        }
        const id = httpRequest.params.id;
        await editBlogs(id, changes);
        return {
            statusCode: 200,
            body: { message: "Blog updated successfully" },
        };
    };
}
