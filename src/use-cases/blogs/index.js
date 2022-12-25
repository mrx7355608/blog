import buildListBlogs from "./list-blogs";
import buildAddBlogs from "./add-blog";
import buildEditBlogs from "./edit-blog";
import buildUnPublishBlogs from "./unPublish-blog";
import buildRemoveBlogs from "./remove-blog";

const blogsDb = ""; // TODO: Add data access layer for blogs
const listBlogs = buildListBlogs({ blogsDb });
const addBlogs = buildAddBlogs({ blogsDb });
const editBlogs = buildEditBlogs({ blogsDb });
const removeBlogs = buildRemoveBlogs({ blogsDb });
const unPublishBlogs = buildUnPublishBlogs({ blogsDb });

const blogServices = {
    listBlogs,
    addBlogs,
    editBlogs,
    removeBlogs,
    unPublishBlogs,
};

export default blogServices;
