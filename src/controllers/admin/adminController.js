// use-cases
import buildDeleteBlog from "./delete-blog.js";
import buildPatchUnPublishBlog from "./patch-unPublish-blog.js";
import buildUpdateBlog from "./patch-blog.js";
import buildCreateBlog from "./create-blog.js";
import buildPatchPublishBlog from "./patch-publish-blog.js";
import buildGetOneBlog from "../blogs/get-one-blog.js";
import buildPostUser from "./post-user.js";
import buildGetUsers from "./get-users.js";
// Blog services
import blogServices from "../../use-cases/blogs/blogServices.js";
import buildGetBlogsForAdmin from "./admin-get-blogs.js";
import userServices from "../../use-cases/users/userServices.js";

const {
    listBlogs,
    listOneBlog,
    addBlogs,
    editBlogs,
    unPublishBlogs,
    publishBlogs,
    removeBlogs,
} = blogServices;

const { listUsers, addUser } = userServices;

const getBlogs = buildGetBlogsForAdmin({ listBlogs });
const getOneBlog = buildGetOneBlog({ listOneBlog });
const createBlog = buildCreateBlog({ addBlogs });
const updateBlogs = buildUpdateBlog({ editBlogs });
const patchUnPublishBlog = buildPatchUnPublishBlog({ unPublishBlogs });
const deleteBlog = buildDeleteBlog({ removeBlogs });
const patchPublishBlog = buildPatchPublishBlog({ publishBlogs });
const patchBlog = buildUpdateBlog({ editBlogs });
const postUser = buildPostUser({ addUser });
const getUsers = buildGetUsers({ listUsers });

const adminBlogController = {
    getBlogs,
    getOneBlog,
    createBlog,
    updateBlogs,
    patchPublishBlog,
    deleteBlog,
    patchUnPublishBlog,
    patchBlog,
    getUsers,
    postUser,
};

export default adminBlogController;
