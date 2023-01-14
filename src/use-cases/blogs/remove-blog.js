export default function buildRemoveBlogs({ blogsDb, AppError }) {
    return async function (id) {
        if (!id) {
            throw new AppError(
                "ValidationError",
                "Provide blog id to remove that blog",
                400
            );
        }

        const existingBlog = await blogsDb.findById(id);
        if (!existingBlog) {
            throw new AppError(
                "NotFoundError",
                "Blog you are trying to delete does not exist",
                404
            );
        }

        return await blogsDb.remove(id);
    };
}
