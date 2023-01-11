export default function buildUpdateBlog({ editBlogs }) {
    return async function (httpRequest) {
        try {
            const changes = httpRequest.body;
	    if (Object.keys(changes).length < 1) {
		throw new Error("Blog changes are not provided")
	    }
            const id = httpRequest.params.id;
            const updatedBlog = await editBlogs(id, changes);
            return {
                statusCode: 200,
                body: { message: "Blog updated successfully" },
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { error: err.message },
            };
        }
    };
}
