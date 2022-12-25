import makeBlog from "../../entities/blogs";

export default function buildAddBlogs({ blogsDb }) {
    return async function (blogData) {
        if (!blogData) {
            throw new Error("Blog data is missing");
        }

        const blog = makeBlog(blogData);
        return await blogsDb.insert({
            title: blog.getTitle(),
            body: blog.getBody(),
            tags: blog.getTags(),
            pusblished: blog.isPublished(),
        });
    };
}
