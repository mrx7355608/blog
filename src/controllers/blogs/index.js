import buildGetBlogs from "./get-blogs.js";
import buildGetOneBlog from "./get-one-blog.js";
// Blog services
import blogServices from "../../use-cases/blogs/blogServices.js";

const { listBlogs, listOneBlog } = blogServices;
const getBlogs = buildGetBlogs({ listBlogs });

const getOneBlog = buildGetOneBlog({ listOneBlog });

const visitorsBlogControllers = {
    getBlogs,
    getOneBlog,
};

export default visitorsBlogControllers;
