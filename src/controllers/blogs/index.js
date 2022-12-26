import buildGetBlogs from "./get-blogs.js";
import buildDeleteBlog from "./delete-blog.js";
import buildPatchUnPublishBlog from "./patch-unPublish-blog.js";
import buildUpdateBlog from "./patch-blog.js";
import buildCreateBlog from "./create-blog.js";
import blogServices from "../../use-cases/blogs/index.js";
import buildPatchPublishBlog from "./path-publish-blog.js";

const {
    listBlogs,
    addBlogs,
    editBlogs,
    unPublishBlogs,
    publishBlogs,
    removeBlogs,
} = blogServices;
const getBlogs = buildGetBlogs({ listBlogs });
const createBlog = buildCreateBlog({ addBlogs });
const updateBlogs = buildUpdateBlog({ editBlogs });
const patchUnPublishBlog = buildPatchUnPublishBlog({ unPublishBlogs });
const deleteBlog = buildDeleteBlog({ removeBlogs });
const patchPublishBlog = buildPatchPublishBlog({ publishBlogs });

const blogControllers = {
    getBlogs,
    createBlog,
    updateBlogs,
    patchUnPublishBlog,
    deleteBlog,
    patchPublishBlog,
};

export default blogControllers;
