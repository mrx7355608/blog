import buildGetBlogs from "./get-blogs.js";
import buildDeleteBlog from "../admin-blogs/delete-blog.js";
import buildPatchUnPublishBlog from "../admin-blogs/patch-unPublish-blog.js";
import buildUpdateBlog from "../admin-blogs/patch-blog.js";
import buildCreateBlog from "../admin-blogs/create-blog.js";
import buildPatchPublishBlog from "../admin-blogs/patch-publish-blog.js";
import blogServices from "../../use-cases/blogs/index.js";
import buildGetOneBlog from "./get-one-blog.js";

const {
    listBlogs,
    addBlogs,
    editBlogs,
    unPublishBlogs,
    publishBlogs,
    removeBlogs,
    listOneBlog,
} = blogServices;
const getBlogs = buildGetBlogs({ listBlogs });
const createBlog = buildCreateBlog({ addBlogs });
const updateBlogs = buildUpdateBlog({ editBlogs });
const patchUnPublishBlog = buildPatchUnPublishBlog({ unPublishBlogs });
const deleteBlog = buildDeleteBlog({ removeBlogs });
const patchPublishBlog = buildPatchPublishBlog({ publishBlogs });
const getOneBlog = buildGetOneBlog({ listOneBlog });

const blogControllers = {
    getBlogs,
    createBlog,
    updateBlogs,
    patchUnPublishBlog,
    deleteBlog,
    patchPublishBlog,
    getOneBlog,
};

export default blogControllers;
