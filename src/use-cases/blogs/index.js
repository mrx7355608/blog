import buildListBlogs from "./list-blogs.js";
import buildAddBlogs from "./add-blog.js";
import buildEditBlogs from "./edit-blog.js";
import buildUnPublishBlogs from "./unPublish-blog.js";
import buildRemoveBlogs from "./remove-blog.js";
import buildPublishBlog from "./publish-blog.js";
import buildListOneBlog from "./list-one-blog.js";
import buildBlogsDb from "../../data-access/blogsDb.js";

const blogsDb = buildBlogsDb();
const blogServices = {
    listBlogs: buildListBlogs({ blogsDb }),
    addBlogs: buildAddBlogs({ blogsDb }),
    editBlogs: buildEditBlogs({ blogsDb }),
    removeBlogs: buildRemoveBlogs({ blogsDb }),
    unPublishBlogs: buildUnPublishBlogs({ blogsDb }),
    publishBlogs: buildPublishBlog({ blogsDb }),
    listOneBlog: buildListOneBlog({ blogsDb }),
};

export default blogServices;
