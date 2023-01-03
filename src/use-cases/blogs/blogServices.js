import buildListBlogs from "./list-blogs.js";
import buildAddBlogs from "./add-blog.js";
import buildEditBlogs from "./edit-blog.js";
import buildUnPublishBlogs from "./unPublish-blog.js";
import buildRemoveBlogs from "./remove-blog.js";
import buildPublishBlog from "./publish-blog.js";
import buildListOneBlog from "./list-one-blog.js";

import buildBlogsDb from "../../data-access/blogsDb.js";

const blogsDb = buildBlogsDb();
const listBlogs = buildListBlogs({ blogsDb });
const addBlogs = buildAddBlogs({ blogsDb });
const editBlogs = buildEditBlogs({ blogsDb });
const removeBlogs = buildRemoveBlogs({ blogsDb });
const unPublishBlogs = buildUnPublishBlogs({ blogsDb });
const publishBlogs = buildPublishBlog({ blogsDb });
const listOneBlog = buildListOneBlog({ blogsDb });

const blogServices = {
    listBlogs,
    addBlogs,
    editBlogs,
    removeBlogs,
    unPublishBlogs,
    publishBlogs,
    listOneBlog,
};

export default blogServices;
