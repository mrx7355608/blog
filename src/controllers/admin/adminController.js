// Controllers
import adminBlogSubController from "./blog/index.js";
import adminUserSubController from "./users/index.js";

const adminController = {
    ...adminBlogSubController,
    ...adminUserSubController,
};

export default adminController;
