import buildGetBlogs from "./get-blogs.js";
import buildDeleteBlog from "./delete-blog.js";
import buildPatchUnPublishBlog from "./patch-unPublish-blog.js";
import buildUpdateBlog from "./patch-blog.js";
import buildCreateBlog from "./create-blog.js";
import blogServices from "../../use-cases/blogs/index.js";

const { listBlogs, addBlogs, editBlogs, unPublishBlogs, removeBlogs } =
    blogServices;
const getBlogs = buildGetBlogs({ listBlogs });
const createBlog = buildCreateBlog({ addBlogs });
const updateBlogs = buildUpdateBlog({ editBlogs });
const unPublishBlog = buildPatchUnPublishBlog({ unPublishBlogs });
const deleteBlog = buildDeleteBlog({ removeBlogs });

const blogControllers = {
    getBlogs,
    createBlog,
    updateBlogs,
    unPublishBlog,
    deleteBlog,
};

export default blogControllers;
