import makeBlog from "../../entities/blogs/buildBlogEntity.js";

export default function buildUnPublishBlogs({ blogsDb }) {
    return async function (id) {
        if (!id) {
            throw new Error("Provide blog id to unpublish");
        }

        const existingBlog = await blogsDb.findById(id);
        if (!existingBlog) {
            throw new Error("Blog you are trying to unpublish does not exist");
        }
        if (!existingBlog.published) {
            throw new Error("Blog has not been published yet!");
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
