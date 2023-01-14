import makeBlog from "../../entities/blogs/buildBlogEntity.js";

export default function buildPublishBlog({ blogsDb, AppError }) {
    return async function (id) {
        if (!id) {
            throw new AppError(
                "ValidationError",
                "Provide blog id to publish that blog",
                400
            );
        }

        const existingBlog = await blogsDb.findById(id);
        if (!existingBlog) {
            throw new AppError(
                "NotFoundError",
                "Blog you are trying to publish does not exist",
                404
            );
        }
        if (existingBlog.published) {
            throw new AppError(
                "BadRequestError",
                "Blog has been published already",
                400
            );
        }

        const blog = makeBlog(existingBlog);
        blog.publish();
        return await blogsDb.update(id, {
            title: blog.getTitle(),
            body: blog.getBody(),
            tags: blog.getTags(),
            published: blog.isPublished(),
        });
    };
}
