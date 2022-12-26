import makeBlog from "../../entities/blogs/index.js";

export default function buildEditBlogs({ blogsDb }) {
    return async function (id, changes) {
        if (!id) {
            throw new Error("Provide blog id to edit that blog");
        }

        const existingBlog = await blogsDb.findById({ id });
        if (!existingBlog) {
            throw new Error("Blog you are trying to edit does not exist");
        }

        const blog = makeBlog({ ...existingBlog, ...changes });
        return await blogsDb.update(id, {
            title: blog.getTitle(),
            body: blog.getBody(),
            tags: blog.getTags(),
            published: blog.isPublished(),
        });
    };
}
