export default function buildListOneBlog({ blogsDb, AppError }) {
    return async function (id) {
        if (!id) {
            throw new AppError("ValidationError", "Id is missing", 400);
        }

        const blog = await blogsDb.findById(id);
        if (!blog) {
            throw new AppError("NotFoundError", "Blog not found", 404);
        }
        if (!blog.published) {
            throw new AppError("NotFoundError", "Blog not found", 404);
        }

        return blog;
    };
}
