import { Router } from "express";
import requestHandler from "../utils/requestHandler.js";
import visitorsBlogController from "../controllers/blogs/index.js";
import adminBlogController from "../controllers/admin-blogs/index.js";

const router = Router();

router.get("/", requestHandler(visitorsBlogController.getBlogs));
router.get("/:id", requestHandler(visitorsBlogController.getOneBlog));

// ONLY FOR ADMIN
router.get("/admin", requestHandler(adminBlogController.getBlogs));
router.get("/admin/:id", requestHandler(adminBlogController.getOneBlog));
router.post("/admin", requestHandler(adminBlogController.createBlog));
router.patch(
    "/admin/publish/:id",
    requestHandler(adminBlogController.patchPublishBlog)
);
router.patch(
    "/admin/un-publish/:id",
    requestHandler(adminBlogController.patchUnPublishBlog)
);

export default router;
