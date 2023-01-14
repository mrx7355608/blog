import makeBlog from "../../entities/blogs/buildBlogEntity.js";

export default function buildAddBlogs({ blogsDb, AppError }) {
    return async function (blogData) {
        if (!blogData) {
            throw new AppError("ValidationError", "Blog data is missing", 400);
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
