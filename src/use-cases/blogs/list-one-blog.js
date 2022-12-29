export default function buildListOneBlog({ blogsDb }) {
    return async function (id) {
        if (!id) {
            throw new Error("Id is missing");
        }

        const blog = await blogsDb.findById(id);
        if (!blog) {
            throw new Error("Blog not found");
        }

        return blog;
    };
}
