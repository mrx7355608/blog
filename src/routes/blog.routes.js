import { Router } from "express";
import requestHandler from "../utils/requestHandler.js";
import blogControllers from "../controllers/blogs/index.js";

const router = Router();

router.get("/", requestHandler(blogControllers.getBlogs));
router.get("/:id", requestHandler(blogControllers.getOneBlog));

// ONLY FOR ADMIN
router.post("/", requestHandler(blogControllers.createBlog));
router.patch("/publish/:id", requestHandler(blogControllers.patchPublishBlog));
router.patch(
    "/un-publish/:id",
    requestHandler(blogControllers.patchUnPublishBlog)
);

export default router;
