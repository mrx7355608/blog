import buildDeleteBlog from "./delete-blog.js";
import buildPatchUnPublishBlog from "./patch-unPublish-blog.js";
import buildUpdateBlog from "./patch-blog.js";
import buildCreateBlog from "./create-blog.js";
import buildPatchPublishBlog from "./patch-publish-blog.js";
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
