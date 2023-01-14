import buildListBlogs from "./list-blogs.js";
import buildAddBlogs from "./add-blog.js";
import buildEditBlogs from "./edit-blog.js";
import buildUnPublishBlogs from "./unPublish-blog.js";
import buildRemoveBlogs from "./remove-blog.js";
import buildPublishBlog from "./publish-blog.js";
import buildListOneBlog from "./list-one-blog.js";
import buildBlogsDb from "../../data-access/blogsDb.js";
import buildBlogStats from "./list-stats.js";
import AppError from "../../utils/AppError.js";

const blogsDb = buildBlogsDb();
const blogServices = {
    listBlogs: buildListBlogs({ blogsDb, AppError }),
    addBlogs: buildAddBlogs({ blogsDb, AppError }),
    editBlogs: buildEditBlogs({ blogsDb, AppError }),
    removeBlogs: buildRemoveBlogs({ blogsDb, AppError }),
    unPublishBlogs: buildUnPublishBlogs({ blogsDb, AppError }),
    publishBlogs: buildPublishBlog({ blogsDb, AppError }),
    listOneBlog: buildListOneBlog({ blogsDb, AppError }),
    listBlogStats: buildBlogStats({ blogsDb }),
};

export default blogServices;
