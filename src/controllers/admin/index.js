// Controllers
import adminBlogSubController from "./blog.controllers.js";
import adminUserSubController from "./user.controllers.js";

const adminController = {
    ...adminBlogSubController,
    ...adminUserSubController,
};

export default adminController;
