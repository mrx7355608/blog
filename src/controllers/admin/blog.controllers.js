import buildGetBlogsForAdmin from "./admin-get-blogs.js";
import buildDeleteBlog from "./delete-blog.js";
import buildPatchUnPublishBlog from "./patch-unPublish-blog.js";
import buildUpdateBlog from "./patch-blog.js";
import buildCreateBlog from "./create-blog.js";
import buildPatchPublishBlog from "./patch-publish-blog.js";
import buildAdminGetOneBlog from "./admin-get-one-blog.js";
import buildGetBlogStats from "./get-blog-stats.js";

import blogServices from "../../use-cases/blogs/index.js";

const getBlogs = buildGetBlogsForAdmin({
    listBlogs: blogServices.listBlogs,
});
const getOneBlog = buildAdminGetOneBlog({
    listOneBlog: blogServices.listOneBlog,
});
const createBlog = buildCreateBlog({
    addBlogs: blogServices.addBlogs,
});
const updateBlogs = buildUpdateBlog({
    editBlogs: blogServices.editBlogs,
});
const patchUnPublishBlog = buildPatchUnPublishBlog({
    unPublishBlogs: blogServices.unPublishBlogs,
});
const deleteBlog = buildDeleteBlog({
    removeBlogs: blogServices.removeBlogs,
});
const patchPublishBlog = buildPatchPublishBlog({
    publishBlogs: blogServices.publishBlogs,
});
const patchBlog = buildUpdateBlog({
    editBlogs: blogServices.editBlogs,
});
const getBlogStats = buildGetBlogStats({
    listStats: blogServices.listBlogStats,
});

const adminBlogSubControllers = {
    getBlogs,
    getOneBlog,
    getBlogStats,
    createBlog,
    updateBlogs,
    patchPublishBlog,
    deleteBlog,
    patchUnPublishBlog,
    patchBlog,
};

export default adminBlogSubControllers;
