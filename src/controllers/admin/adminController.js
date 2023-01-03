// Controllers
import blogControllers from "./blog/blogs.controller.js";
import userControllers from "./users/users.controller.js";

const adminController = {
    ...blogControllers,
    ...userControllers,
};

export default adminController;
