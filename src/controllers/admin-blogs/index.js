import buildDeleteBlog from "../admin-blogs/delete-blog.js";
import buildPatchUnPublishBlog from "../admin-blogs/patch-unPublish-blog.js";
import buildUpdateBlog from "../admin-blogs/patch-blog.js";
import buildCreateBlog from "../admin-blogs/create-blog.js";
import buildPatchPublishBlog from "../admin-blogs/patch-publish-blog.js";
// Blog services
import blogServices from "../../use-cases/blogs/index.js";
const { addBlogs, editBlogs, unPublishBlogs, publishBlogs, removeBlogs } =
    blogServices;

const createBlog = buildCreateBlog({ addBlogs });
const updateBlogs = buildUpdateBlog({ editBlogs });
const patchUnPublishBlog = buildPatchUnPublishBlog({ unPublishBlogs });
const deleteBlog = buildDeleteBlog({ removeBlogs });
const patchPublishBlog = buildPatchPublishBlog({ publishBlogs });

const adminBlogController = {
    createBlog,
    updateBlogs,
    patchPublishBlog,
    deleteBlog,
    patchUnPublishBlog,
};

export default adminBlogController;
