import makeBlog from "../../entities/blogs/buildBlogEntity.js";

export default function buildUnPublishBlogs({ blogsDb, AppError }) {
    return async function (id) {
        if (!id) {
            throw new AppError(
                "ValidationError",
                "Provide blog id to unpublish",
                400
            );
        }

        const existingBlog = await blogsDb.findById(id);
        if (!existingBlog) {
            throw new AppError(
                "NotFoundError",
                "Blog you are trying to unpublish does not exist",
                404
            );
        }
        if (!existingBlog.published) {
            throw new AppError(
                "BadRequestError",
                "Blog has not been published yet!",
                400
            );
        }

        const blog = makeBlog(existingBlog);
        blog.unPublish();
        return await blogsDb.update(id, {
            title: blog.getTitle(),
            body: blog.getBody(),
            tags: blog.getTags(),
            published: blog.isPublished(),
        });
    };
}
