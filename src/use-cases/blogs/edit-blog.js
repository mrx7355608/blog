import makeBlog from "../../entities/blogs/buildBlogEntity.js";

export default function buildEditBlogs({ blogsDb }) {
    return async function (id, changes) {
        if (!id) {
            throw new Error("Provide blog id to edit that blog");
        }
        if (!changes) {
            throw new Error("Changes to be made are missing");
        }

        const existingBlog = await blogsDb.findById(id);
        if (!existingBlog) {
            throw new Error("Blog you are trying to edit does not exist");
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
