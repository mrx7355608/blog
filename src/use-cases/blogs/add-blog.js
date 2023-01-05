import makeBlog from "../../entities/blogs/buildBlogEntity.js";

export default function buildAddBlogs({ blogsDb }) {
    return async function (blogData) {
        if (!blogData) {
            throw new Error("Blog data is missing");
        }
        if (typeof blogData.tags === "string") {
            blogData.tags = Array(blogData.tags);
        }
        blogData.tags = blogData.tags.map((t) => t.toLowerCase());

        const blog = makeBlog(blogData);
        return await blogsDb.insert({
            title: blog.getTitle(),
            body: blog.getBody(),
            tags: blog.getTags(),
            published: blog.isPublished(),
        });
    };
}
