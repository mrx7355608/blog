import { Router } from "express";
import requestHandler from "../utils/requestHandler.js";
import adminBlogController from "../controllers/admin-blogs/adminController.js";

const router = Router();

router.get("/", requestHandler(adminBlogController.getBlogs));
router.get("/:id", requestHandler(adminBlogController.getOneBlog));
router.post("/", requestHandler(adminBlogController.createBlog));
router.patch("/update/:id", requestHandler(adminBlogController.patchBlog));
router.patch(
    "/publish/:id",
    requestHandler(adminBlogController.patchPublishBlog)
);
router.patch(
    "/un-publish/:id",
    requestHandler(adminBlogController.patchUnPublishBlog)
);

export default router;
