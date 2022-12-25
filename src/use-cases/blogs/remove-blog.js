export default function buildRemoveBlogs({ blogsDb }) {
    return async function (id) {
        if (!id) {
            throw new Error("Provide blog id to remove that blog");
        }

        const existingBlog = await blogsDb.findById({ id });
        if (!existingBlog) {
            throw new Error("Blog you are trying to delete does not exist");
        }

        return await blogsDb.remove({ id });
    };
}
