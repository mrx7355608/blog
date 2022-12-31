import buildDeleteBlog from "../admin-blogs/delete-blog.js";
import buildPatchUnPublishBlog from "../admin-blogs/patch-unPublish-blog.js";
import buildUpdateBlog from "../admin-blogs/patch-blog.js";
import buildCreateBlog from "../admin-blogs/create-blog.js";
import buildPatchPublishBlog from "../admin-blogs/patch-publish-blog.js";
import buildGetOneBlog from "../blogs/get-one-blog.js";
// Blog services
import blogServices from "../../use-cases/blogs/blogServices.js";
import buildGetBlogsForAdmin from "./admin-get-blogs.js";

const {
    listBlogs,
    listOneBlog,
    addBlogs,
    editBlogs,
    unPublishBlogs,
    publishBlogs,
    removeBlogs,
} = blogServices;

const getBlogs = buildGetBlogsForAdmin({ listBlogs });
const getOneBlog = buildGetOneBlog({ listOneBlog });
const createBlog = buildCreateBlog({ addBlogs });
const updateBlogs = buildUpdateBlog({ editBlogs });
const patchUnPublishBlog = buildPatchUnPublishBlog({ unPublishBlogs });
const deleteBlog = buildDeleteBlog({ removeBlogs });
const patchPublishBlog = buildPatchPublishBlog({ publishBlogs });
const patchBlog = buildUpdateBlog({ editBlogs });

const adminBlogController = {
    getBlogs,
    getOneBlog,
    createBlog,
    updateBlogs,
    patchPublishBlog,
    deleteBlog,
    patchUnPublishBlog,
    patchBlog,
};

export default adminBlogController;
