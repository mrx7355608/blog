import makeBlog from "../../entities/blogs/buildBlogEntity.js";

export default function buildEditBlogs({ blogsDb, AppError }) {
    return async function (id, changes) {
        if (!id) {
            throw new AppError(
                "ValidationError",
                "Provide blog id to edit that blog",
                400
            );
        }

        const existingBlog = await blogsDb.findById(id);
        if (!existingBlog) {
            throw new AppError(
                "NotFoundError",
                "Blog you are trying to edit does not exist",
                404
            );
        }

        const newData = Object.assign(existingBlog, changes);
        const blog = makeBlog(newData);
        return await blogsDb.update(id, {
            title: blog.getTitle(),
            body: blog.getBody(),
            tags: blog.getTags(),
            published: blog.isPublished(),
        });
    };
}
