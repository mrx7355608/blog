import makeBlog from "../../entities/blogs/index.js";

export default function buildPublishBlog({ blogsDb }) {
    return async function (id) {
        if (!id) {
            throw new Error("Provide blog id to publish that blog");
        }

        const existingBlog = await blogsDb.findById(id);
        if (!existingBlog) {
            throw new Error("Blog you are trying to publish does not exist");
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